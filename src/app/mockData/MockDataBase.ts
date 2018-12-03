import {UserData} from "../model/UserData";
import {User} from "../model/User";
import {Appointment} from "../model/Appointment";
import {Customer} from "../model/Customer";
import {Device} from "../model/Device";
import {Note} from "../model/Note";
import {Task} from "../model/Task";
import {Part} from "../model/Part";

export class MockDataBase {

  isConnected(): boolean{
    return true;
  }

  tryLoadData(userName: string, pwHash: string): UserData{
    if(this.validateUser(userName,pwHash)){
      return this.userData;
    }
    return null;
  }

  trySaveData(userData: UserData, pwHash: string): boolean{
    if(this.validateUser(userData.getUser().getName(), pwHash) && userData.getUser().validatePwHash(pwHash)){
      this.userData = userData;
      return true;
    }
    return false;
  }

  validateUser(userName: string, pwHash: string): boolean{
    if(this.user.getName() == userName && this.user.validatePwHash(pwHash)){
      return true;
    }
    return false;
  }

  constructor(){
    this.user = new User("a","a");

    this.userData = new UserData(this.user);

    let c1 = new Customer("HSKA");
    let c2 = new Customer("KIT");
    let c3 = new Customer("DHBW");
    let c4 = new Customer("PH");

    this.userData.setAppointments([
      new Appointment("Appointment 1", c1),
      new Appointment("Appointment 2", c1),
      new Appointment("Appointment 3", c2),
      new Appointment("Appointment 4", c1),
      new Appointment("Appointment 5", c4),
    ]);

    this.userData.setCustomers([
      c1,
      c2,
      c3,
      c4,
    ]);

    let d1 = new Device("Device1", c1, [0,0]);
    let d2 = new Device("Device2", c1, [42,1337]);
    let d3 = new Device("Device3", c2, [1234567,9876543]);
    c1.setDevices([d1,d2]);
    c2.setDevices([d3]);

    this.userData.setDevices([
      d1,
      d2,
      d3,
    ]);

    this.userData.setNotes([
      new Note("Note1"),
      new Note("Note2", "The appointments should maybe have more descriptive names."),
      new Note("Note3", "Maybe there should be a 'back' button somewhere in this ui..."),
      new Note("Note4", "Constructor overloading is quite hacky in TypeScript")
    ]);

    let t1 = new Task("Task1");
    t1.setText("Note1 should get some text");
    this.userData.setTasks([
      t1,
      new Task("Task2", "This is the second mock task with some text. It also has a fancy list in it:" +
        "\n" +
        "\n - [ ] Item 1" +
        "\n - [ ] Item 2" +
        "\n - [ ] Item 3" +
        "\n" +
        "\nNot that bad, right?")
    ]);

    let p1 = new Part("PC");
    p1.setPrice(1250.99);
    this.userData.setParts([p1]);
  }

  private user: User;
  private userData: UserData;
}