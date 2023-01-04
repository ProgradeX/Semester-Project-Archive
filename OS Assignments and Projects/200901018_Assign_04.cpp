#include <iostream>
#include <string>
#include <thread>
#include <future>

using namespace std;

string TakeUserInput(string &InputString) {
    cout << "Enter String: "; getline(cin, InputString);
    return InputString;
};

void ReverseString(string UserString) {
    int StringSize = UserString.size();
    cout << "Reversed: ";
    for (int i = StringSize; i >= 0; i--){
        cout << UserString[i];
    }
    cout << endl;
};

void CapitalizeString(string UserString) {
    cout << "Capitalized: ";
    for (int i = 0; i < UserString.size(); i++)
    {
        putchar(toupper(UserString[i]));
    }
    cout << endl;
};

void ShiftString(string UserString) {
    cout << "Shifted: ";
    for (int i = 0; i < UserString.size(); i++)
    {
        putchar(UserString[i] + 2);
    }
    cout << endl;
};


int main() {
    string UserString;

    thread InputThread(TakeUserInput, ref(UserString));
    InputThread.join();

    thread ReverseThread(ReverseString, UserString);
    thread CapitalizeThread(CapitalizeString, UserString);
    thread ShiftThread(ShiftString, UserString);

    ReverseThread.join();
    CapitalizeThread.join();
    ShiftThread.join();
}