package ickList.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Stat {
	public int ickCount;

	public int ickMonthlyChangePercents;

}
