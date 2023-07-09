import java.util.ArrayList;

class Solution {
    public int[] solution(int[] arr, int[] delete_list) {
        ArrayList<Integer> ans = new ArrayList<>();
        
        for (int i = 0; i < arr.length; i++) {
            boolean flag = true;
            for (int j = 0; j < delete_list.length; j++) {
                if (arr[i] == delete_list[j]) {
                    flag = false;
                }
            }
            
            if (flag) {
                ans.add(arr[i]);
            }
        }
        
        int[] answer = new int[ans.size()];
        
        for (int i = 0; i < ans.size(); i++) {
            answer[i] = ans.get(i).intValue();
        }
        
        
        return answer;
    }
}