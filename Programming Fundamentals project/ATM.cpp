#include <iostream>
#include <string>
#include <conio.h>
using namespace std;

struct userID
{
    int ID;
    double balance;
    string name;
};

int createfunc(int& i, userID* u)
{
    system("cls");
    cout << "Enter person name: ";
    cin >> u[i].name;
    cout << "\nEnter PIN code (recommended 4 digits): ";
    cin >> u[i].ID;
    cout << "\nEnter your starting balance (in rs.): ";
    cin >> u[i].balance;
    cout << "\n--------------------\n";
    cout << "Account created!\n\n";

    cout << "These are your details:" << "\nAccount no: " << i << "\nName: " << u[i].name << "\nPIN code: " << u[i].ID << "\nInitial balance: " << u[i].balance << endl;
    cout << "\nPress any key to return to main screen";
    i++;  //counter goes to next location in array for next new accounts
    _getch();

    return 0;
}

int verifyfunc(int& i, userID* u) //main transactions happen here
{
    system("cls");
    int uid, uidnumber;
    string uname;
    cout << "select ID: ";
    cin >> uid;
    cout << "\nwelcome " << u[uid].name << " !";
    cout << "\nenter PIN: ";
    cin >> uidnumber;

    if (uidnumber == u[uid].ID)
    {
        cout << "\n\nlogin successful!";
        cout << "\nAccount no: " << uid << "\nName: " << u[uid].name << "\nID number: " << u[uid].ID << "\nInitial balance: " << u[uid].balance << endl;
        cout << endl << endl;
        int t = 0, inval;
        cout << "press 1 to withdraw\n" << "press 2 to deposit\n" << "press 0 to return to main screen\n";
        cin >> t;
        switch (t) {
        case 1:
            cout << "\nhow much do you wish to withdraw? ";
            cin >> inval;
            u[uid].balance = u[uid].balance - inval;
            cout << "your new balance is: " << u[uid].balance;
            cout << "\npress any key to continue";
            _getch();
            return 1;
            break;
        case 2:
            cout << "\nhow much do you wish to deposit? ";
            cin >> inval;
            u[uid].balance = u[uid].balance + inval;
            cout << "your new balance is: " << u[uid].balance;
            cout << "\npress any key to continue";
            _getch();
            return 1;
            break;
        }
        return 1;

    }
    else if (uidnumber != u[uid].ID)
    {
        cout << "\nwrong PIN or ID!, press 1 to retry or any other number to return to main menu.";
        int t=0;
        cin >> t;
        if (t == 1) {
            return 0;
        }
        else return 1;
    }
}

void showusers(userID *u, int &i) // shows table of all accounts
{
    system("cls");
    cout << "U-ID\tName\tbalance\n";
    for (int p = 0; p < 10; p++)
    {
        cout << p+1 << "\t" << u[p].name << "\t" << u[p].balance<<endl;
    }
    cout << "press any key to continue\n";
    _getch();
}

int main()
{
    userID u[10] = {};
    int desc, i = 0;
    int restartvalue = 0;
    do {
        system("cls");
        cout << "press 1 to create account\n";
        cout << "press 2 to log-in\n";
        cout << "press 3 to view all users\n";
        cout << "press 4 to exit program\n";
        cin >> desc;
        if (desc == 1)
        {
            createfunc(i, u);
        }
        else if (desc == 2)
        {
            int temp = 0;
            do {
                temp = verifyfunc(i, u);
            } while (temp == 0);
        }
        else if (desc == 3)
        {
            showusers(u, i);
        }
        else if (desc == 4)
        {
            cout << "database will reset!\n";
            restartvalue = 1;
        }
    } while (restartvalue == 0);
    return 0;
}