package ickList.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ickList.model.Ick;

@Repository
public interface IckRepository extends JpaRepository<Ick, Integer> {
}