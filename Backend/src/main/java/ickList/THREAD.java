package ickList;

import org.springframework.stereotype.Component;

@Component
public class THREAD extends Thread{
@Override
public void run(){
	System.out.println("Run");
}
}
