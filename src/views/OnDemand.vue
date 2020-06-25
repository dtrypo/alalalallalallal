<template>
  <div>
    <header>
      <div class="wrapper-site">
        <div class="header-content">
          <img src="../assets/logo.png" alt="logo" width="75" height="75" />
          <h1>Έχετε έκτακτη ανάγκη για delivery στην επιχείρησή σας;</h1>
          <h2>
            Με την υπηρεσία MyJobNow OnDemand καλύπτετε τις έκτατες
            <span style="color: #26a2f0;">βάρδιες</span> άμεσα
          </h2>
          <a href="#form" class="btn">Πάρτε Προσφορά</a>
          <ul>
            <li>
              <i class="material-icons">today</i>
              <span>Πες μας τις βάρδιες που θέλεις να καλύψεις</span>
            </li>
            <li>
              <i class="material-icons">done</i>
              <span>Βρίσκουμε τον κατάλληλο εργαζόμενο για εσάς</span>
            </li>
            <li>
              <i class="material-icons">sports_motorsports</i>
              <span>Ο επαγγελματίας διανομέας είναι έτοιμος για εργασία</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      <section class="easy">
        <div class="wrapper-site">
          <h2>Ο ευκολότερος τρόπος να μεγαλώσετε την ομάδα σας γρήγορα</h2>
          <p>
            Απροσδόκητες αλλαγές προσωπικού; Αυξήσεις των αναγκών; Ακυρώσεις ή άδειες της τελευταίας στιγμής;
            <br />
            <b>Μπορούμε να καλύψουμε τις ανάγκες σας!</b>
            <br />Οι αξιόπιστοι και επιλεγμένοι επαγγελματίες διανομείς της ομάδας μας μπορούν να σας βοηθήσουν άμεσα, όταν η επιχείρησή σας τους χρειάζεται περισσότερο.
          </p>
          <div class="cards">
            <div class="card">
              <i class="material-icons">schedule</i>
              <h3>Ταχύτητα</h3>
              <p>Η μεγέθυνση της ομάδας σας μέσα σε λίγες ώρες σας προσφέρει ένα ανταγωνιστικό πλεονέκτημα στην αγορά</p>
            </div>
            <div class="card">
              <i class="material-icons">verified</i>
              <h3>Ποιότητα</h3>
              <p>Η διαδικασία επιλογής των υποψηφίων εξασφαλίζει την ποιότητα των εργαζομένων</p>
            </div>
            <div class="card">
              <i class="material-icons">gavel</i>
              <h3>Νομική συμμόρφωση</h3>
              <p>Η εργατική νομοθεσία είναι περίπλοκη. Αναλαμβάνουμε όλες τις διαδικασίες μισθοδοσίας και νομικής συμμόρφωσης</p>
            </div>
          </div>
        </div>
      </section>
      <section id="form" class="wrapper-site">
        <h2>Συμπληρώστε τις ανάγκες σας και δείτε το εκτιμώμενο τελικό κόστος</h2>
        <div class="flex-wrapper">
          <div class="part">
            <form @submit.prevent>
              <div class="form-field">
                <label for="people">Επιλέξτε πλήθος εργαζομένων</label>
                <input type="number" min="1" v-model="people" @change="calculate" />
              </div>
              <div class="form-field">
                <label for="date">Επιλέξτε ημερομηνίες (μέγιστο διάστημα 7 ημερών)</label>
                <date-picker id="date" mode="range" v-model="dates"></date-picker>
                <small
                  style="color:red;margin:0 0 1rem;"
                  v-if="dateError"
                >Επιλέξτε από 1 έως 7 ημέρες για να συνεχίσετε</small>
              </div>
              <div class="form-field">
                <label for="time">Επιλέξτε ώρες βάρδιας ανά μέρα (4 έως 8 ώρες)</label>
                <input type="number" name="time" id="time" min="4" max="8" v-model="time" @change="calculate" />
              </div>
            </form>
          </div>
          <div class="part">
            <h3 style="margin:4rem 0 6rem; font-weight: 700;color: #26a2f0;">
              Εκτιμώμενο κόστος: 
              <span style="font-size: 38px;">{{ total_cost }}€</span>
            </h3>
          </div>
        </div>

        <form>
          <h2>Ενδιαφέρεστε για την υπηρεσία; Συμπληρώστε τα στοιχεία σας και θα σας καλέσουμε άμεσα.</h2>
          <div class="form-field">
            <label for="name">Ονοματεπώνυμο</label>
            <input type="text" v-model="name" required />
          </div>
          <div class="form-field">
            <label for="phone">Τηλέφωνο</label>
            <input type="number" v-model="phone" required />
          </div>
          <div class="form-field">
            <label for="email">Email</label>
            <input type="mail" v-model="email" required />
          </div>
          <div class="form-field">
            <button type="submit" @click="send">Ενδιαφέρομαι</button>
          </div>
        </form>
      </section>
    </main>
    <footer style="background-color: #26a2f0;color:#fff;padding:4rem 0;">
      <div class="wrapper-site">
        <h2 style="color:#fff;">Συχνές Ερωτήσεις</h2>
        <blockquote>
          <p style="font-weight: 600;">Για πόσο χρονικό διάστημα μπορώ να μισθώσω ένα διανομέα;</p>
          <p style="font-size:15px;margin:1rem 0 2rem 1rem;">
            <em>- Μπορείτε από 4 ώρες μέχρι 7 συνεχόμενες ημέρες. Αυτή η ευελιξία σας επιτρέπει να προσαρμόζετε το προσωπικό στις ανάγκες σας.</em>
          </p>
        </blockquote>
        <blockquote>
          <p style="font-weight: 600;">Πόσους διανομείς μπορώ να μισθώσω σε μία φορά;</p>
          <p style="font-size:15px;margin:1rem 0 2rem 1rem;">
            <em>- Μπορείτε να μισθώσετε όσους διανομείς θέλετε.</em>
          </p>
        </blockquote>
        <blockquote>
          <p
            style="font-weight: 600;"
          >Πώς ξέρω ότι ο διανομέας είναι κατάλληλος για την επιχείρησή μου;</p>
          <p style="font-size:15px;margin:1rem 0 2rem 1rem;">
            <em>- Οι υποψήφιοι διανομείς περνούν από μία προσεκτική διαδικασία επιλογής από το μέρος μας. Μετά το αίτημά σας επιλέγουμε το διανομέα που ταιριάζει περισσότερο στις ανάγκες και την επιχειρήσή σας.</em>
          </p>
        </blockquote>
        <blockquote>
          <p style="font-weight: 600;">Τι γίνεται αν δεν είμαι ευχαριστημένος με το διανομέα;</p>
          <p style="font-size:15px;margin:1rem 0 2rem 1rem;">
            <em>- Οι υποψήφιοι διανομείς περνούν από μία προσεκτική διαδικασία επιλογής από το μέρος μας. Στην ασυνήθιστη περίπτωση όμως που δεν είστε ικανοποιημένοι με την απόδοση, μπορείτε να επικοινωνήσετε μαζί μας και να καλύψουμε το κόστος της μέρας.</em>
          </p>
        </blockquote>
        <blockquote>
          <p style="font-weight: 600;">Τι καλύπτει το κόστος της μίσθωσης;</p>
          <p style="font-size:15px;margin:1rem 0 2rem 1rem;">
            <em>- Το τελικό κόστος της υπηρεσίας καλύπτει τη μισθοδοσία και την ασφαλιστική κάλυψη των εργαζομένων, καθώς και έμμεσα κόστη για την διαχείριση των διανομέων.</em>
          </p>
        </blockquote>
      </div>
    </footer>
  </div>
</template>

<script>
import { DatePicker } from "v-calendar";
import axios from "axios";

export default {
  name: "OnDemand",
  components: {
    DatePicker
  },
  data() {
    return {
      dates: {
        start: null,
        end: null
      },
      people: 1,
      name: null,
      phone: null,
      email: null,
      dateError: false,
      time: 4,
      calcData: {
        2: { payroll_cost: 8.7 },
        3: { payroll_cost: 8.66 },
        4: { payroll_cost: 8.61 },
        5: { payroll_cost: 8.57 },
        6: { payroll_cost: 8.53 },
        7: { payroll_cost: 8.48 },
        8: { payroll_cost: 8.44 },
        9: { payroll_cost: 8.4 },
        10: { payroll_cost: 8.36 },
        11: { payroll_cost: 8.32 },
        12: { payroll_cost: 8.27 },
        13: { payroll_cost: 8.23 },
        14: { payroll_cost: 8.19 },
        15: { payroll_cost: 8.15 },
        16: { payroll_cost: 8.11 },
        17: { payroll_cost: 8.07 },
        18: { payroll_cost: 8.03 },
        19: { payroll_cost: 7.99 },
        20: { payroll_cost: 7.95 },
        21: { payroll_cost: 7.91 },
        22: { payroll_cost: 7.87 },
        23: { payroll_cost: 7.83 },
        24: { payroll_cost: 7.79 },
        25: { payroll_cost: 7.75 },
        26: { payroll_cost: 7.71 },
        27: { payroll_cost: 7.68 },
        28: { payroll_cost: 7.64 },
        29: { payroll_cost: 7.6 },
        30: { payroll_cost: 7.56 },
        31: { payroll_cost: 7.52 },
        32: { payroll_cost: 7.49 },
        33: { payroll_cost: 7.45 },
        34: { payroll_cost: 7.41 },
        35: { payroll_cost: 7.37 },
        36: { payroll_cost: 7.34 },
        37: { payroll_cost: 7.3 },
        38: { payroll_cost: 7.26 },
        39: { payroll_cost: 7.23 },
        40: { payroll_cost: 7.2 }
      },
      total_cost: 0
    };
  },
  computed: {
    datesArray: function() {
      var getDaysArray = function(s, e) {
        for (var a = [], d = new Date(s); d <= e; d.setDate(d.getDate() + 1)) {
          a.push(new Date(d));
        }
        return a;
      };

      var daylist = getDaysArray(this.dates.start, this.dates.end);
      daylist.map(v => v.toISOString().slice(0, 10)).join("");

      return daylist;
    }
  },
  watch: {
    datesArray: function() {
      if (this.datesArray.length <= 7) {
        this.dateError = false;
      } else {
        this.dateError = true;
        this.dates.start = null;
        this.dates.end = null;
      }

      if (this.dates.start == null && this.dates.end == null) {
        this.dateError = true;
      }

      this.calculate();
    }
  },
  methods: {
    calculate() {
      console.log(this.people, this.datesArray, this.time)
      if (this.people == null || this.datesArray == null || this.time == null ) {
        return;
      }

      var sunday = false;
      this.datesArray.forEach(element => {
        if (element.getDay() === 0) {
          sunday = true;
        }
      });
      var shift = this.datesArray.length;
      var hours = this.time * shift;

      function round(value, decimals) {
        return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
      }

      let key = round(hours, 0);
      
      var cost = 0;

      if (key >= 40) {
        cost = 7.2
      } else {
        cost = this.calcData[key].payroll_cost;
      }

      if (sunday) {
        this.total_cost = round(
          ((cost + 1.2) * 1.25 * (key - this.time) +
            (cost * 1.75 + 1.2) * 1.25 * this.time) * this.people,
          2
        );
      } else {
        this.total_cost = round(((cost + 1.2) * 1.25 * key) * this.people, 2);
      }
    },
    send() {
      axios
        .get("https://hooks.zapier.com/hooks/catch/6179842/o8rcnkv/", {
          params: {
            drivers_need: this.people,
            schedule: this.datesArray,
            timeStart: this.timeStart,
            timeEnd: this.timeEnd,
            total_cost: this.total_cost,
            name: this.name,
            email: this.email,
            phone: this.phone
          }
        })
        .then(response => {
          console.log(response);
        });
    }
  }
};
import "vue2-timepicker/dist/VueTimepicker.css";
</script>

<style scoped>
header {
  background-image: url("../assets/landing_page_ondemand.jpg");
  background-size: contain;
  background-position: center right;
  background-repeat: no-repeat;
  padding: 8rem 0;
}

ul {
  margin-top: 6rem;
}

ul li {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 20px;
  font-weight: 600;
}

i {
  border: 1px solid #000;
  border-radius: 100%;
  padding: 0.5rem;
  margin-right: 1rem;
}

.header-content {
  max-width: 50%;
}

@media screen and (max-width: 800px) {
  .header-content {
    max-width: 100%;
  }
  header {
    background-image: none;
  }
}

.easy {
  background-color: #f7f7f7;
  padding: 4rem 0;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  margin: 4rem 0 0;
}

.card {
  max-width: 34rem;
  margin: 2rem;
  text-align: center;
  background-color: #26a2f0;
  padding: 3rem 1.5rem;
  color: #fff;
  border-radius: 5px;
}

.card i {
  border-color: #fff;
  font-size: 38px;
}

.card h3 {
  color: #fff;
}

label {
  font-weight: 600;
}

.flex-wrapper{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.part {
  min-width: 34rem;
  margin: 2rem;
}
</style>