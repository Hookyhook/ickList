package ickList.model;

import java.time.Instant;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Ick {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	int id;

	String ickDescription;

	@Enumerated(EnumType.STRING)
	Gender gender;

	@Enumerated(EnumType.STRING)
	IckType ickType;

	@CreationTimestamp
	private Instant createdOn;
}
