package ickList.rest;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ickList.model.Word;
import ickList.service.WordService;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/v1/word")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class WordController {
    private WordService wordService;

    @PutMapping
    public ResponseEntity<Word> createWord(@RequestParam String word, @RequestParam String name) {
        return ResponseEntity.ok(wordService.createWord(word, name));
    }

    @GetMapping
    public ResponseEntity<List<Word>> getWordList() {
        return ResponseEntity.ok(wordService.getWordList());
    }

    @GetMapping
    public ResponseEntity<Map<String, List<Word>>> getGroupedWordList (){
        return ResponseEntity.ok(wordService.getWordList().stream().collect(Collectors.groupingBy(Word::getName)));
    }
}
