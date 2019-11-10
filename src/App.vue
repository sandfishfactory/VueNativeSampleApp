<template>
<app-navigator></app-navigator>
</template>

<script>
import AppNavigator from './router'
import Realm from 'realm'


export default {
  components: {
    AppNavigator
  },
  created: function() {
    const UserSchema = {
      name: 'User',
      properties: {
        userid: 'string',
        password: 'string',
      }
    };

    Realm.open({
        schema: [UserSchema]
      })
      .then(realm => {
        // Realmオブジェクトを作成してローカルDBに保存します
        realm.write(() => {
          const userData = realm.create('User', {
            userid: 'Yamada',
            password: 'YamadaPassword',
          });
        });
        const users = realm.objects('User');
        console.log("[DEBUG]users:" + JSON.stringify(users))
      });
  }
}
</script>
