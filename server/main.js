import { Meteor } from 'meteor/meteor';
import { setupApi } from '../server/routes/api'

Meteor.startup(() => {
  //F. Andres Vera: para mejora de accesibilidad, seria bueno especificar el atributo "lang" del html.
  //Estas dejando archivos importantes del servidor, en el lado del cliente. (Tal vez hay una confusion con el nombre de las carpetas).
  setupApi();
});
