package org.eclipse.scava.web.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.eclipse.scava.platform.Configuration;
import org.eclipse.scava.platform.Platform;
import org.eclipse.scava.repository.model.BugTrackingSystem;
import org.eclipse.scava.repository.model.CommunicationChannel;
import org.eclipse.scava.repository.model.Project;
import org.eclipse.scava.repository.model.VcsRepository;
import org.eclipse.scava.repository.model.bts.bugzilla.Bugzilla;
import org.eclipse.scava.repository.model.cc.nntp.NntpNewsGroup;
import org.eclipse.scava.repository.model.redmine.RedmineBugIssueTracker;
import org.eclipse.scava.repository.model.sourceforge.SourceForgeBugTrackingSystem;
import org.eclipse.scava.repository.model.vcs.git.GitRepository;
import org.eclipse.scava.repository.model.vcs.svn.SvnRepository;
import org.eclipse.scava.web.dto.BugTrackingSystemData;
import org.eclipse.scava.web.dto.CommunicationChannelData;
import org.eclipse.scava.web.dto.ProjectData;
import org.eclipse.scava.web.dto.VcsRepositoryData;
import org.eclipse.scava.web.rest.util.HeaderUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codahale.metrics.annotation.Timed;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.mongodb.Mongo;

@RestController
@RequestMapping("/api/administration")
public class ProjectManagementResource {

    private final Logger log = LoggerFactory.getLogger(ProjectManagementResource.class);
    
    private static final String ENTITY_NAME = "project";
    
    public ProjectManagementResource() {
    }
    
    /**
     * Projects List
     * @param page
     * @return
     */
    @GetMapping("/projects/{page}")
    @Timed
    public List<Project> getListProjects(@PathVariable Long page) {
        
    	return null;
    }
    
    /**
     * Project Search
     * @return
     */
    @GetMapping("/projects/search")
    @Timed
    public List<Project> getSearchProjects() {
        
    	return null;
    }
    
    /**
     * MetaData Project
     * @param projectId
     * @return
     */
    @GetMapping("/projects/{projectId}")
    @Timed
    public List<Project> getMetaDataProject(@PathVariable Long projectId) {
    	    	
    	return null;
    }
    
    /**
     * Import Project
     * @param project
     * @return
     */
    @PostMapping("/projects/import")
    @Timed
    public ResponseEntity<Project> importProject(@RequestBody Project project) {
    	
    	return null;
    }
    
    @PostMapping("/projects/add")
    @Timed
    public ResponseEntity<Project> addProject(@RequestBody ProjectData projectData) throws URISyntaxException {
    	
    	Mongo mongo = null;
    	Project project = new Project();
    	project.setName(projectData.getName());
    	try {
			mongo = Configuration.getInstance().getMongoConnection();
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
    	
    	Platform platform = new Platform(mongo);
    	String shortName = platform.getProjectRepositoryManager().generateUniqueId(project);
    	project.setShortName(shortName);
    	
		// TODO: Check it doesn't already exist - how?
		System.out.println("Adding new project");
		platform.getProjectRepositoryManager().getProjectRepository().getProjects().add(project);
		platform.getProjectRepositoryManager().getProjectRepository().getProjects().sync();

		// Query it for returning
		project = platform.getProjectRepositoryManager().getProjectRepository().getProjects().findOneByShortName(shortName);
		
    	return ResponseEntity.created(new URI("/api/administration/projects/add" + project.getId()))
    			.headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, project.getId()))
    			.body(project);
    }
    
    /**
     * Create Project
     * @param project
     * @return
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/projects/register")
    @Timed
    public ResponseEntity<Project> createProject(@RequestBody ProjectData projectData) throws URISyntaxException {
    	
    	Mongo mongo = null;
    	
    	// Save Project Object using Pongo

    	Project project = new Project();
    	project.setName(projectData.getName());
    	project.setHomePage(projectData.getHomePage());
    	project.setDescription(projectData.getDescription());
    	
    	for (VcsRepositoryData	vcsData : projectData.getVcsRepositoriesData()) {
    		VcsRepository repo = null;
			if (vcsData.getType().equals("git")) {
    			repo = new GitRepository();
			} else if (vcsData.getType().equals("svn")) {
    			repo = new SvnRepository();
			}
    		repo.setUrl(vcsData.getUrl());
    		project.getVcsRepositories().add(repo);
		}
    	
    	for (BugTrackingSystemData btsData : projectData.getBugTrackingSystemsData()) {
    		BugTrackingSystem buggy = null;
    		switch (btsData.getType()) {
    		case "bugzilla":
				Bugzilla bugs = new Bugzilla();
				bugs.setProduct(btsData.getProduct());
				bugs.setComponent(btsData.getComponent());
				buggy = bugs;
				break;
			case "sourceforge":
				SourceForgeBugTrackingSystem sf = new SourceForgeBugTrackingSystem();
				buggy = sf;
				break;
			case "redmine":
				RedmineBugIssueTracker red = new RedmineBugIssueTracker();
				red.setProject(btsData.getProject());
				red.setName(btsData.getName());
				buggy = red;
				break;
			default:
				continue;
			}
    		buggy.setUrl(btsData.getUrl());
    		project.getBugTrackingSystems().add(buggy);
		}
    	
    	for (CommunicationChannelData ccData : projectData.getCommunicationChannelsData()) {
    		CommunicationChannel channel = null;
    		switch (ccData.getType()) {
			case "nntp":
				NntpNewsGroup newsGroup = new NntpNewsGroup();
				newsGroup.setName(ccData.getName());
				newsGroup.setUrl(ccData.getUrl());
				channel = newsGroup;
				break;
			default:
				continue;
			}
    		project.getCommunicationChannels().add(channel);
		}
    	
    	try {
			mongo = Configuration.getInstance().getMongoConnection();
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
    	
    	Platform platform = new Platform(mongo);
    	String shortName = platform.getProjectRepositoryManager().generateUniqueId(project);
    	project.setShortName(shortName);
    	
		// TODO: Check it doesn't already exist - how?
		System.out.println("Adding new project");
		platform.getProjectRepositoryManager().getProjectRepository().getProjects().add(project);
		platform.getProjectRepositoryManager().getProjectRepository().getProjects().sync();

		// Query it for returning
		project = platform.getProjectRepositoryManager().getProjectRepository().getProjects().findOneByShortName(shortName);
		
    	return ResponseEntity.created(new URI("/api/administration/projects/register" + project.getId()))
    			.headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, project.getId()))
    			.body(project);
    }
   
}
