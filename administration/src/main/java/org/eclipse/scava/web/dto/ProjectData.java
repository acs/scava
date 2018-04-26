package org.eclipse.scava.web.dto;

import java.util.List;

public class ProjectData {

	
	private String name;
	private String homePage;
	private String description;
	private List<VcsRepositoryData> vcsRepositoriesData;
	private List<BugTrackingSystemData> bugTrackingSystemsData;
	private List<CommunicationChannelData> communicationChannelsData;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getHomePage() {
		return homePage;
	}
	public void setHomePage(String homePage) {
		this.homePage = homePage;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<VcsRepositoryData> getVcsRepositoriesData() {
		return vcsRepositoriesData;
	}
	public void setVcsRepositoriesData(List<VcsRepositoryData> vcsRepositoriesData) {
		this.vcsRepositoriesData = vcsRepositoriesData;
	}
	public List<BugTrackingSystemData> getBugTrackingSystemsData() {
		return bugTrackingSystemsData;
	}
	public void setBugTrackingSystems(List<BugTrackingSystemData> bugTrackingSystemsData) {
		this.bugTrackingSystemsData = bugTrackingSystemsData;
	}
	public List<CommunicationChannelData> getCommunicationChannelsData() {
		return communicationChannelsData;
	}
	public void setCommunicationChannelsData(List<CommunicationChannelData> communicationChannelsData) {
		this.communicationChannelsData = communicationChannelsData;
	}
	
}
