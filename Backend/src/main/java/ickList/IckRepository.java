package ickList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IckRepository extends JpaRepository<Ick, Integer> {
}
