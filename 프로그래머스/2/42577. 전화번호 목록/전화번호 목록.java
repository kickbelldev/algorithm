import java.util.HashSet;

class Solution {
    public boolean solution(String[] phone_book) {
        HashSet<String> set = new HashSet();
        for (String phone : phone_book) {
            set.add(phone);
        }
        
        for (String phone : phone_book) {
            for (int i = 0; i < phone.length(); i++) {
                String prefix = phone.substring(0, i);
                
                if (set.contains(prefix)) {
                    return false;
                }
            }
        }
        
        return true;
    }
}