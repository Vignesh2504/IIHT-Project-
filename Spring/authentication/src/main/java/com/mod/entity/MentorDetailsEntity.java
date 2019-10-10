package com.mod.entity;

import javax.persistence.*;

@Entity
@Table(name="mentor_details")
public class MentorDetailsEntity {
	
	@Id
	 @GeneratedValue(strategy = GenerationType.TABLE)
	@Column(name="mentor_id")
	private Integer mentorId;
	@Column(name="mentor_name")
	private String mentorName;
	@Column(name="mentor_email")
	private String mentorEmail;
	@Column(name="technology")
	private String technology;
	public String getTechnology() {
		return technology;
	}

	public void setTechnology(String technology) {
		this.technology = technology;
	}

	@Column(name="mentor_years_exp")
	private Integer mentorYearsExp;
	@Column(name="mentor_linkdin_url")
	private String mentorLinkdinUrl;
	@Column(name="password")
	private String password;
	@Column(name="mentor_phone")
	private String mentorPhone;
	@Column(name="no_of_trainings")
	private Integer trainings;
	@Column(name="rating")
	private float rating;
	
	@OneToOne(targetEntity=ActorsEntity.class,cascade=CascadeType.ALL)
	@JoinColumn(name="actor_id")
	private ActorsEntity actor;
	
	public MentorDetailsEntity() {
		super();
	}

	public MentorDetailsEntity(Integer mentorId, String mentorName, String mentorEmail, Integer mentorYearsExp,
			String mentorLinkdinUrl, String password, String mentorPhone, Integer trainings, float rating,
			ActorsEntity actor) {
		super();
		this.mentorId = mentorId;
		this.mentorName = mentorName;
		this.mentorEmail = mentorEmail;
		this.mentorYearsExp = mentorYearsExp;
		this.mentorLinkdinUrl = mentorLinkdinUrl;
		this.password = password;
		this.mentorPhone = mentorPhone;
		this.trainings = trainings;
		this.rating = rating;
		this.actor = actor;
	}

	public Integer getMentorId() {
		return mentorId;
	}

	public void setMentorId(Integer mentorId) {
		this.mentorId = mentorId;
	}

	public String getMentorName() {
		return mentorName;
	}

	public void setMentorName(String mentorName) {
		this.mentorName = mentorName;
	}

	public String getMentorEmail() {
		return mentorEmail;
	}

	public void setMentorEmail(String mentorEmail) {
		this.mentorEmail = mentorEmail;
	}

	public Integer getMentorYearsExp() {
		return mentorYearsExp;
	}

	public void setMentorYearsExp(Integer mentorYearsExp) {
		this.mentorYearsExp = mentorYearsExp;
	}

	public String getMentorLinkdinUrl() {
		return mentorLinkdinUrl;
	}

	public void setMentorLinkdinUrl(String mentorLinkdinUrl) {
		this.mentorLinkdinUrl = mentorLinkdinUrl;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMentorPhone() {
		return mentorPhone;
	}

	public void setMentorPhone(String mentorPhone) {
		this.mentorPhone = mentorPhone;
	}

	public Integer getTrainings() {
		return trainings;
	}

	public void setTrainings(Integer trainings) {
		this.trainings = trainings;
	}

	public float getRating() {
		return rating;
	}

	public void setRating(float rating) {
		this.rating = rating;
	}

	public ActorsEntity getActor() {
		return actor;
	}

	public void setActor(ActorsEntity actor) {
		this.actor = actor;
	}

	
}
