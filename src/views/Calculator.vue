<template>
  <div>
    <header>
      <div class="wrapper-site">
        <div class="header-content">
          <img src="../assets/logo.png" alt="logo" width="75" height="75" />
          <h1>
            Βρείτε άτομο για delivery
            <br />όταν το χρειάζεστε
          </h1>
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
        <form @submit.prevent>
          <div class="form-field">
            <label for="people">Επιλέξτε πλήθος εργαζομένων</label>
            <input type="number" v-model="people" />
          </div>
          <div class="form-field">
            <label for="date">Επιλέξτε ημερομηνίες (μέγιστο διάστημα 7 ημερών)</label>
            <date-picker id="date" mode="range" v-model="dates"></date-picker>
            <small style="color:red;" v-if="dateError">Επιλέξτε από 1 έως 7 ημέρες για να συνεχίσετε</small>
          </div>
          <div class="form-field">
            <div v-if="dates.start != null && !dateError">
              <label for="time">Επιλέξτε βάρδια ανά μέρα (4 έως 8 ώρες)</label>
              <small style="color:red;" v-if="errorTime">Επιλέξτε από 4 έως 8 ώρες για να συνεχίσετε</small>
              <div v-for="(date, index) in datesArray" :key="index">
                <div style="margin-top: 1rem;">
                  <strong>Επιλέξτε βάρδια για τον εργαζόμενο {{ index + 1 }}</strong>
                </div>
                <div v-for="(d, i) in date" :key="i">
                  <div style="margin-top: 2rem;">{{ d.date | moment("dddd DD/MM/YYYY") }}</div>
                  <div style="margin-left:2rem;">
                    <span style="margin-right:1rem; white-space: nowrap;">
                      Έναρξη:
                      <vue-timepicker
                        :minute-interval="10"
                        close-on-complete
                        v-model="d.time.start"
                        @change="checkTime(d)"
                      ></vue-timepicker>
                    </span>
                    <span style="margin-right:1rem; white-space: nowrap;">
                      Λήξη:
                      <vue-timepicker
                        :minute-interval="10"
                        close-on-complete
                        v-model="d.time.end"
                        @change="checkTime(d)"
                      ></vue-timepicker>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-field">
            <label for="name">Ονοματεπώνυμο</label>
            <input type="text" v-model="name" required />
          </div>
          <div class="form-field">
            <label for="phone">Τηλέφωνο</label>
            <input type="number" v-model="phone" />
          </div>
          <div class="form-field">
            <label for="email">Email</label>
            <input type="mail" v-model="email" />
          </div>
          <div class="form-field">
            <button v-if="!dateError && !errorTime" type="submit" @click="calculate">Δείτε το κόστος</button>
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
import VueTimepicker from "vue2-timepicker";

export default {
  name: "Calendar",
  components: {
    DatePicker,
    VueTimepicker
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
      errorTime: false
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

      var final = [];
      daylist.forEach(element => {
        final.push({
          date: element,
          time: {
            start: null,
            end: null
          }
        });
      });

      var pickers = [];

      for (let i = 0; i < this.people; i++) {
        pickers.push(final);
      }

      return pickers;
    }
  },
  watch: {
    datesArray: function() {
      if (this.datesArray.length <= 7) {
        this.dateError = false;
      } else {
        this.dateError = true;
      }
    }
  },
  methods: {
    checkTime(d) {
      this.errorTime = false;
      if (d.time.start != null && d.time.end != null) {
        if (
          d.time.start.HH != "" &&
          d.time.start.mm != "" &&
          d.time.end.HH != "" &&
          d.time.end.mm != ""
        ) {
          if (
            d.time.end.HH +
              d.time.end.mm -
              (d.time.start.HH + d.time.start.mm) <
              400 ||
            d.time.end.HH +
              d.time.end.mm -
              (d.time.start.HH + d.time.start.mm) >
              800
          ) {
            this.errorTime = true;
          }
        }
      }
    },
    calculate() {
      
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
</style>