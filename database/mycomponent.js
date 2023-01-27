// import { connectRealm } from "react-native-realm";
// import { View, Text } from "react-native";
// class MyComponent extends Component {
//   addPerson = () => {
//     const { realm } = this.props;
//     realm.write(() => {
//       realm.create("Person", {
//         firstName: "Tim",
//       });
//     });
//   };

//   render() {
//     <View>
//       <Text>My Component</Text>
//     </View>;
//   }
// }

// export default connectRealm(MyComponent, {
//   schemas: ["Person"],
//   mapToProps(results, realm, ownProps) {
//     // the object that is returned from the mapToProps function
//     // will be merged into the components props
//     return {
//       realm,
//       // property on the results argument is the camel-cased and
//       // pluralized version of the schema name, so...
//       // instead of person being the property we get people
//       people: results.people,
//     };
//   },
// });
