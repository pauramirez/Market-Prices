Meteor.methods({
    addComentario(comentario) {

        //F. Andres Vera: Buena implementacion de seguridad sobre los usuarios no registrados. 
        if (!Meteor.userId()) {
            throw new Meteor.Error("not-authorized")
        }

        Comentarios.insert({
            text: comentario,
            complete: false,
            createdAt: new Date(),
            user: Meteor.userId()
        });
    },

    toggleComentario(comentario) {
        if (Meteor.userId() !== comentario.user) {
            throw new Meteor.Error("not-authorized")
        }
        Comentarios.update(comentario._id, {
            $set: { complete: !comentario.complete }
        });
    },

    deleteComentario(comentario) {
        if (Meteor.userId() !== comentario.user) {
            throw new Meteor.Error("not-authorized")
        }
        Comentarios.remove(comentario._id);
    },

 
});
