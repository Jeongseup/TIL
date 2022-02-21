import java.util.Scanner;

public class GugudanMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
			
		System.out.println("구구단 중 출력할 단은? : ");
		Scanner scanner = new Scanner(System.in);
		
		int num = scanner.nextInt();
		System.out.println("사용자가 입력한 값 : " + num);
		
		if (num < 2) {
			System.out.println("값을 잘못 입력했습니다.");
		} else if (num > 9) {			
			System.out.println("값을 잘못 입력했습니다.");
		} else {

			int[] result = Gugudan.calculate(num);
			Gugudan.print(result);		
		}	
	}
}
