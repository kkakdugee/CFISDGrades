import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class gpa {

    static String[] year = { "Freshman:", "Sophomore:", "Junior:", "Senior:" };
    static int countYear = 0;
    static double GPA = 0;
    static int sum = 0;
    static int length = 0;

    public static void main(String[] args) throws FileNotFoundException {
        Scanner sc = new Scanner(new File("gpa.txt"));
        while (sc.hasNextLine()) {
            String[] grades = sc.nextLine().split(" ");
            for (int i = 0; i < grades.length; i++) {
                sum += Integer.parseInt(grades[i]);
            }
            length += grades.length;
            GPA = (double) sum / length;
            System.out.println(year[countYear++] + " " + GPA);
        }
    }
}