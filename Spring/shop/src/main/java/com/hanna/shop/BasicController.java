package com.hanna.shop;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.time.LocalDate;

@Controller
public class BasicController {
    @GetMapping("/2")
    @ResponseBody  // 문자 그대로 보내주세요
    String hello () {
        return "안녕하세요~ 반가워요!";
    }

    @GetMapping("/about")
    String about () {
        return "./index.html";
    }
    @GetMapping("/mypage")
    @ResponseBody
    String my_page () {
        return "마이페이지예요.";
    }

    @GetMapping("/date")
    @ResponseBody
    String get_time () {
        String d2 = LocalDate.now().toString();
//        System.out.println(d1);
        return d2;
    };
}
