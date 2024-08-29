package com.passwordgen.api.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.Random;

@RestController
@CrossOrigin(origins = "*")
public class PasswordGenerationController {

    Random random = new Random();
    String[] completeGenPassword = {
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
            "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
            "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7",
            "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", ";", ":",
            "'", "\"", ",", ".", "/", "<", ">", "?", "\\", "|", "`", "~"};
    String[] numberGenPassword = {"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"};
    String[] alfaNumericGenPassword = {
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
            "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
            "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7",
            "8", "9"};

    @GetMapping("/complete/{length}")
    public ResponseEntity<String> generateCompletePassword(@PathVariable(value = "length") int passwordLength){
        if(passwordLength < 8){
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Length to small, minimum is 8!");
        }else if(passwordLength > 50){
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("To long, max is 50!");
        }
        String[] tempPass = new String[passwordLength];
        for(int n = 0; n < passwordLength; n++){
            tempPass[n] = completeGenPassword[random.nextInt(92)];
        }
        String newPassword = String.join("", tempPass);
        return ResponseEntity.status(HttpStatus.CREATED).body(newPassword);
    }

    @GetMapping("/numeric/{length}")
    public ResponseEntity<String> generateNumericPassword(@PathVariable(value = "length") int passwordLength){
        if(passwordLength < 8){
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("To small, min is 8!");
        }else if(passwordLength > 50){
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("To long, max is 50!");
        }
        String[] tempPass = new String[passwordLength];
        for(int n = 0; n < passwordLength; n++){
            tempPass[n] = numberGenPassword[random.nextInt(10)];
        }
        String newPassword = String.join("", tempPass);
        return ResponseEntity.status(HttpStatus.CREATED).body(newPassword);
    }

    @GetMapping("/alfanum/{length}")
    public ResponseEntity<String> generateAlfaNumericPassword(@PathVariable(value = "length") int passwordLength){
        if(passwordLength < 8){
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Length to small, minimum is 8!");
        }else if(passwordLength > 50){
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("To long, max is 50!");
        }
        String[] tempPassword = new String[passwordLength];
        for(int n = 0; n < passwordLength; n++){
            tempPassword[n] = alfaNumericGenPassword[random.nextInt(61)];
        }
        String newPassword = String.join("", tempPassword);
        return ResponseEntity.status(HttpStatus.CREATED).body(newPassword);
    }
}