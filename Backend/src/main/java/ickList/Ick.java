package ickList;

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
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Ick {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	int id;

	String ickDescription;

	@Enumerated(EnumType.ORDINAL)
	Gender gender;

	@Enumerated(EnumType.ORDINAL)
	IckType icktype;
}
