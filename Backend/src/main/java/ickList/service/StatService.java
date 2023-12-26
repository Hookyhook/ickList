package ickList.service;

import java.util.List;

import org.springframework.stereotype.Service;

import ickList.model.Ick;
import ickList.model.Stat;
import ickList.service.function.StatisticCalculation;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class StatService {

	IckService ickService;

	public Stat getStat(){
		List<Ick> icks = ickService.getIcks();

		int ickCount = icks.toArray().length;

		StatisticCalculation statisticCalculation = new StatisticCalculation();

		int ickMonthlyChangePercents = statisticCalculation.apply(icks);

		return Stat.builder()
				.ickCount(ickCount)
				.ickMonthlyChangePercents(ickMonthlyChangePercents)
				.build();
	}
}
