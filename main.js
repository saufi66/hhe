const buttonSatu = document.querySelector(".button-satu");
const buttonDua = document.querySelector(".button-dua");
const loading = document.querySelector(".loading");
const header = document.querySelector("header");
const main = document.querySelector("main");
const txt = document.querySelector(".txt");
const body = document.body;
const audio = document.createElement("audio");
body.append(audio);
let poss = 0;
const index = [
  `kita sekarang ini lo jarang banar bechatan <br>
        aku tau ae ikm haur aku haur juga kadang tapi am
        pas kd haur ya sama aja ya jarang-jarang jua kita bechatan heh`,
  `hiih, klo jarang chatan aja, pas ikm ngiranya aku kd syng lgi <br>
        gmna kan repot jadinya`,
  `sebenarnya aku tu syg lwn ikm tpi am aku kd beduit kya apa <br>
        aku juga kdng sedih laa yaa gmna ga sedih coba <br>
        ekonomi aku aja minus lalu heh belanja kdng engga laa <br>
          soalnya kan aku kdd beduit.`,
  `aku gin pengen bejalanan ma ikm tpi aku kdd beduit <br>
        jar ikm dlu tu aku gamau duit ikm jr ikm tu  <br>
        aku mau nya kita tu bisa bejalanan aja <br>
        ya kek gitu lah kira-kira kata ikm dulu.`,
  `hmm. aku gabisa euy kalo harus kek gitu <br>
        soalnya aku malu trss masa aku ga ngasih makan ikm <br>
        aku sebenarnya bukan ga bisa apa pang <br>
        aku tu delama sama ekonomi aku`,
  `sebenarnya aku aja supan bejalan sama ikm <br>
        supan knp nh?`,
  `"pertama" kita bejalanan tu udah pake kendaraan ikm <br>
        itu aja udah meulah aku supan <br>
        "kedua" faktor ekonami sayang ae mknya aku supan <br>
        aku tu cuma supan bukan berarti aku mau putus <br>
        "ketiga" aku dicap sebagai cwo yg kd bemodal <br>
        aku aja sampe skrng msih ingt <br>
        apa yg jr nana kwn nisa tu <br>
        pas nisa masih pcrn lwn rahmat inya ada bilang <br>
        kd bemodal lalu pcr lia nih jr <br>
        heh harga diri ku asa diinjak-injak bnr tu <br>`,
  `makanya jua aku gamau bejalanan lwn nisa karna apa <br>
        karna inya mndngr ap yg jr nana tu <br>
        aku bukannya gamau pg jka kdd pengalamaan kek gtu <br>
        aku pasti mau trss bjlnn lwn nisa <br>`,
  `dlu knp aku hkun bjlnn lwn nisa tu ya karna <br>
        aku masih blm tpi supan bnr <br>
        lawan kd tpi kepikiran soal itu <br>
        dulu tu aku ada niatan mau berjuang <br>
        berjuang supaya kd dismbt lakian kd bemodal lgi. <br>
        tpi ujung-ujung nya gagal maaf ya <br>
        aku nih gin sbnrnya supan jua ngisah akn ini <br>
        tpi mnrut aku ikmm tu kbnykn salah paham nya sudah <br>
        makanya aku mau menjelas akn. <br>
        kaya smlm aja ad lo ikm mau membawai bjln lwn nisa jr ikm <br>
        iya tdih aku supan lwn faktor kd beduit jua <br>
        duit ada tpi klo kd mayu <br>
        cukup gsn aku srngn aja.`,
  `jr ikm jua dlu klo ikm duit mempas <br>
         aku pake duit srngn aja <br>
        mknya aku magin malu <br>
         terhadap dri aku sendiri heh cwo apa aku nih  <br>
        aku tuh supan laa bukan karna ikm pg <br>
        tapi karena diri aku sendiri.`,
  `aku pun mau berusaha spya ga gini lagi. <br>
        tpi susah euy kmrn aku aja kerja ga bisa beroko <br>
        sdngkn aku aja tiap hri beroko <br>`,
  `kita skrng jarang jua lo chtn<br>
        tpi jngn ngira aku udh ga syng lagi <br>
        aku aja biar kita udh kya urng asing <br>
        ttp aja syng sma ikm tu aku ga mempermasalahkan pg <br>
        biar kita jrng bhctn tu <br>
        tpi ikm bnr ae harau ngira aku menjauh <br>
        iya tdih jua sebab nya gra-gra kd beduit <br>
        mknya dluu tu aku menghindari chtn ikm <br>
        karna aku takut klo nya ikm membawai bjlnn`,
  `tiap ikm membawai bejalanan lo aku takutan lwn panik-paniknya <br>
        aku juga mau nolak susah kdng <br>
        mknya laa sering boong kya bealasan bnyk kitu hhe <br>
        maaf nya udh boong <br>
        aku jga bingung laa gmna cara nolak nya <br>
        mau bilang kd beduit supan euy <br>
        miris bngtt lo idup ku hhe <br>
        maka ini mau tahun baru <br>
        maaf mungkin aku jga ga bisa laa hhe <br>
        anggap aja euy web ini hadiah buat ikm <br>
        maaf yaa ay`,
  `tiap ikm membawai bejalanan lo aku takutan lwn panik-paniknya <br>
        aku juga mau nolak susah kdng <br>
        mknya laa sering boong kya bealasan bnyk kitu hhe <br>
        maaf nya udh boong <br>
        aku jga bingung laa gmna cara nolak nya <br>
        mau bilang kd beduit supan euy <br>
        miris bngtt lo idup ku hhe <br>
        maka ini mau tahun baru <br>
        maaf mungkin aku jga ga bisa laa hhe <br>
        anggap aja euy web ini hadiah buat ikm <br>
        maaf yaa ay`,
];
buttonSatu.addEventListener("click", () => {
  loading.style.display = "block";
  hidden();
  TimerTxt();
});
buttonDua.addEventListener("click", () => {
  const top = Math.floor(Math.random() * 85);
  const right = Math.floor(Math.random() * 85);
  const buttom = Math.floor(Math.random() * 85);
  const left = Math.floor(Math.random() * 85);
  buttonDua.style.position = "absolute";
  buttonDua.style.transition = "all 0.8s";
  buttonDua.style.top = `${top}%`;
  buttonDua.style.right = `${right}%`;
  buttonDua.style.bottom = `${buttom}%`;
  buttonDua.style.left = `${left}%`;
});

const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};
const hidden = async () => {
  let a = await delay(8200);
  header.style.display = "none";
  audio.src = "music.mp3";
  audio.play();
};
const tataLetak = () => {
  const top = Math.floor(Math.random() * 85);
  const right = Math.floor(Math.random() * 85);
  const buttom = Math.floor(Math.random() * 85);
  const left = Math.floor(Math.random() * 85);
  main.style.width = "80%";
  main.style.height = "80%";
  main.style.margin = "10% auto";
  txt.style.textAlign = "center";
};
const TimerTxt = () => {
  setTimeout(() => {
    tataLetak();
    txt.innerHTML = index[0];
  }, 8500);

  setTimeout(() => {
    tataLetak();
    txt.innerHTML = index[1];
  }, 28500);

  setTimeout(() => {
    tataLetak();
    txt.innerHTML = index[2];
  }, 38500);

  setTimeout(() => {
    tataLetak();
    txt.innerHTML = index[3];
  }, 58500);
  setTimeout(() => {
    tataLetak();
    txt.innerHTML = index[4];
  }, 78500);
  setTimeout(() => {
    tataLetak();
    txt.innerHTML = index[5];
  }, 98500);
  setTimeout(() => {
    tataLetak();
    txt.innerHTML = index[6];
  }, 118500);
  setTimeout(() => {
    tataLetak();
    txt.innerHTML = index[7];
  }, 138500);
  setTimeout(() => {
    tataLetak();
    txt.innerHTML = index[8];
  }, 168500);
  setTimeout(() => {
    tataLetak();
    txt.innerHTML = index[9];
  }, 188500);
  setTimeout(() => {
    tataLetak();
    txt.innerHTML = index[10];
  }, 218500);
  setTimeout(() => {
    tataLetak();
    txt.innerHTML = index[11];
  }, 238500);
  setTimeout(() => {
    tataLetak();
    txt.innerHTML = index[12];
  }, 268500);
  setTimeout(() => {
    tataLetak();
    txt.innerHTML = index[13];
  }, 290000);
};
