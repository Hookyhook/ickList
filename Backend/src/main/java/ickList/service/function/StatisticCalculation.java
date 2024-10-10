package ickList.service.function;

import java.time.LocalDate;
import java.time.Month;
import java.time.ZoneId;
import java.util.List;
import java.util.function.Function;

import ickList.model.Ick;

public class StatisticCalculation implements Function<List<Ick>, Integer> {

    @Override
    public Integer apply(List<Ick> Icks) {
        LocalDate currenDate = LocalDate.now();
        Month currentMonth = currenDate.getMonth();
        int newIcksThisMonth = Icks.stream().filter(ick -> ick.getCreatedOn().atZone(ZoneId.systemDefault()).getMonth() == currentMonth)
            .toArray().length;
        int oldIcks = Icks.stream().filter(ick -> ick.getCreatedOn().atZone(ZoneId.systemDefault()).getMonth() != currentMonth)
            .toArray().length;
        if (oldIcks == 0) {
            return 100;
        }
        return newIcksThisMonth / oldIcks;
    }
}
