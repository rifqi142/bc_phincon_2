let test: string = "Testing";
test = "Hello";
console.log(test);

let names: readonly string[] = ["Andy"];
console.log(names);

type Status = "inactive" | { name: "Sigit" };

let setStatus = (a: Status, b: number) => {
  return a;
};

console.log(setStatus({ name: "Sigit" }, 10));

type systemMessage =
  | {
      kind: "ABORT";
      jobId: number;
      reason: string;
    }
  | {
      kind: "DELETE";
      jobId: number;
    }
  | {
      kind: "RETRY";
      jobId: number;
      attempts: number;
    }
  | {
      kind: "SAVE";
      jobId: number;
      data: object;
    };

const processMessage = (msg: systemMessage) => {
  switch (msg.kind) {
    case "SAVE":
      console.log(msg.jobId + " " + JSON.stringify(msg.data));
      break;
    case "RETRY":
      console.log(msg.jobId + " " + msg.attempts);
      break;
    case "DELETE":
      console.log(msg.jobId);
      break;
    case "ABORT":
      console.log(msg.jobId + " " + msg.reason);
      break;
    default:
      break;
  }
};

processMessage({
  kind: "SAVE",
  jobId: 123,
  data: { name: "Sigit" },
});

interface Abort {
  kind: "ABORT";
  jobId: number;
  reason: string;
}
interface Save {
  kind: "SAVE";
  jobId: number;
  reason: string;
}
interface Pending {
  kind: "PENDING";
  jobId: number;
  reason: string;
}
interface Success {
  kind: "SUCCESS" | "SUCCESSFULLY";
  jobId: number;
  reason: string;
}

let request = (req: Success) => {
  return req.jobId;
};

console.log(
  request({
    kind: "SUCCESSFULLY",
    jobId: 9000,
    reason: "Berhasil request data",
  })
);

interface Identity {
  id: number;
  name: string;
  card: 123;
}
interface Contact {
  phoneNumber: string;
  email: string;
  card: "test";
}

type Employee = Identity | Contact;

function getEmployee(employee: Employee) {
  return employee;
}

console.log(getEmployee({ name: "Sigit", id: 1, card: 123 }));

function getNames<A>(names: A[]) {
  return names;
}

getNames<any>([true, "1"]);

class GetListNames<A> {
  private values: A[] = [];
  private getListNames(): A[] {
    return this.values;
  }
  public setListName(name: A): void {
    this.values.push(name);
  }
  public getSecondListNames() {
    return this.getListNames();
  }
}

let listNames = new GetListNames<string>();
listNames.setListName("Sigit");
listNames.setListName("Fauzan");
// console.log(listNames.values);
console.log(listNames.getSecondListNames());
