package com.mod.entity;

import javax.persistence.*;

@Entity
@Table(name="user_details")
public class UserDetailsEntity {
	
	@Id
	 @GeneratedValue(strategy = GenerationType.TABLE)
	@Column(name="user_id")
	@PrimaryKeyJoinColumn
	private Integer userId;
	@Column(name="user_name")
	private String userName;
	@Column(name="user_email")
	private String userEmail;
	@Column(name="user_password")
	private String userPassword;

	@OneToOne(targetEntity=ActorsEntity.class,cascade=CascadeType.ALL)
	@JoinColumn(name="actor_id")
	private ActorsEntity actor;

	public ActorsEntity getActor() {
		return actor;
	}

	public UserDetailsEntity() {
		super();
	}

	public UserDetailsEntity(String userName, String userEmail, String userPassword) {
		super();
		this.userName = userName;
		this.userEmail = userEmail;
		this.userPassword = userPassword;
	}

	public void setActor(ActorsEntity users) {
		this.actor = users;
	}

	public Integer getUserId() {
		return userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getuserPassword() {
		return userPassword;
	}

	public void setuserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

}
