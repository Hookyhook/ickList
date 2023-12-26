package ickList.service.function;

import java.util.List;
import java.util.function.Function;

import ickList.model.Ick;

public class StatisticCalculation implements Function<List<Ick>, Integer> {
	@Override
	public Integer apply(List<Ick> Icks){

		return 1;
	}
}
