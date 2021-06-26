const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "john@doe.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      const randomUser = results[0];

      const {
        name: { title, first: firstName, last: lastName },
        email,
        gender,
        picture: { thumbnail, medium },
      } = randomUser;

      (this.firstName = firstName),
        (this.lastName = lastName),
        (this.email = email),
        (this.gender = gender),
        (this.picture = medium);
    },
  },
});

app.mount("#app");
