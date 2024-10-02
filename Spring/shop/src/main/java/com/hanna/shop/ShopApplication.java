package com.hanna.shop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ShopApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShopApplication.class, args);

		String lover = "kimyoungbo";
		lover = "kim";
		System.out.println(lover);

		if (lover.contains("k")) {
			System.out.println("@");
		}

		Test test = new Test();
		System.out.println(test.name);
		test.hello();

		var a = new Friend("구멍");
		var b = new Friend("bob");
		System.out.println(a.name);
		System.out.println(b.age);
	}

}

class Test {
	String name = "kim";
	void hello () {
		System.out.println("안녕");
	}
}

class Friend {
	String name = "baek";
	int age = 28;
	Friend(String 구멍) {
		this.name = 구멍;
	}
}