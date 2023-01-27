import Realm from "realm";

export const TASK_SCHEMA = "Task";

export const TaskSchema = {
  name: TASK_SCHEMA,
  primaryKey: "id",
  properties: {
    id: "int",
    name: "string",
  },
};

const databaseOptions = {
  path: "taskApp.realm",
  schema: [TaskSchema],
  schemaVersion: 0,
};

// Methods for Tasks

export const insertNewTask = (payload) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          realm.create(TASK_SCHEMA, payload);
        });
      })
      .catch((error) => reject(error));
  });
