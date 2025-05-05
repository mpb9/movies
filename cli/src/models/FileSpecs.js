export default class FileSpecs {
  constructor(name = "", img = "", src = "", url = "", tags = [], date = "") {
    this.name = name;
    this.img = img;
    this.src = src;
    this.url = url;
    this.tags = tags;
    this.date = date;
  }
}

// MARK: Featured
export const featuredFiles = [
  new FileSpecs(
    "25 for 25",
    "the-social-network.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/25-for-25/detail/",
    ["featured", "lists"],
    "2025-05-10"
  ),
  new FileSpecs(
    "Escapism",
    "All-About-Lily-Chou-Chou.jpeg",
    "Escapism.html",
    "",
    ["featured", "series"],
    "2025-05-10"
  ),
  new FileSpecs(
    "Everybody Wants Some!!",
    "everybodywantssome.jpg",
    "Everybody Wants Some!!.html",
    "",
    ["featured", "reviews"],
    "2025-03-07"
  ),
  new FileSpecs(
    "Burning",
    "Burning.jpg",
    "Burning.html",
    "",
    ["featured", "reviews"],
    "2025-01-24"
  ),
];

// MARK: Reviews
export const reviewsFiles = [
  new FileSpecs(
    "Nickel Boys",
    "nickel-boys.png",
    "Nickel Boys.html",
    "",
    ["reviews"],
    "2025-02-11"
  ),
  new FileSpecs(
    "Fullmetal Alchemist: Brotherhood",
    "fma-brotherhood.png",
    "Fullmetal Alchemist: Brotherhood.html",
    "",
    ["reviews", "show", "spoilers"],
    "2025-02-11"
  ),
  new FileSpecs(
    "Requiem for a Dream",
    "requiem-for-a-dream.jpg",
    "Requiem for a Dream.html",
    "",
    ["reviews"],
    "2024-09-18"
  ),
  new FileSpecs(
    "Rebel Ridge",
    "Rebel_Ridge.jpg",
    "Rebel Ridge.html",
    "",
    ["reviews"],
    "2024-09-13"
  ),
  new FileSpecs(
    "Trainspotting",
    "Trainspotting.jpg",
    "Trainspotting.html",
    "",
    ["reviews"],
    "2024-04-12"
  ),
  new FileSpecs(
    "The Curse",
    "the-curse.png",
    "The Curse.html",
    "",
    ["reviews", "show"],
    "2024-01-12"
  ),
];

// MARK: Lists
export const listsFiles = [
  new FileSpecs(
    "2025",
    "sinners.png",
    "",
    "https://letterboxd.com/michaelbeebe/list/2025/",
    ["lists", "year"],
    "2025-12-31"
  ),
  new FileSpecs(
    "2020s",
    "Dune_Part_2_09.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/decade-2020s/",
    ["lists", "decade"],
    "2029-12-31"
  ),
  new FileSpecs(
    "Song Moments",
    "treasure-planet.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/song-moments/detail/",
    ["lists", "music"]
  ),
  new FileSpecs(
    "Ani(make me consider my purpose)",
    "end-of-eva.png",
    "",
    "https://letterboxd.com/michaelbeebe/list/animake-me-consider-my-purpose-and-existence/",
    ["lists", "show", "anime"]
  ),
  new FileSpecs(
    "Non-boy Boy Movies",
    "bottle-rocket.png",
    "",
    "https://letterboxd.com/michaelbeebe/list/non-boy-boy-movies/",
    ["lists"]
  ),
];

// MARK: Classics
export const classicsFiles = [
  new FileSpecs(
    "All-Time Favs",
    "Portrait_of_a_Lady_on_Fire_027.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/all-time-favs/",
    ["classics", "lists"]
  ),
  new FileSpecs(
    "Directors",
    "eyes-wide-shut.jpeg",
    "",
    "https://letterboxd.com/michaelbeebe/list/directors/detail/",
    ["classics", "lists"]
  ),
  new FileSpecs(
    "Scenes",
    "berserk-bonfire.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/scenes/detail/",
    ["classics", "lists"]
  ),
  new FileSpecs(
    "Sci-Fi Canon",
    "children-of-men1.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/sci-fi-canon/",
    ["classics", "lists", "genre"]
  ),
  new FileSpecs(
    "Settings",
    "ladybird063.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/setting/",
    ["classics", "lists"]
  ),
  new FileSpecs(
    "Soundtracks",
    "Fallen-Angels-066.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/soundtracks/detail/",
    ["classics", "lists"]
  ),
  new FileSpecs(
    "Trailers",
    "Poor_Things_63.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/trailers/detail/",
    ["classics", "lists"]
  ),
];

// MARK: Archive
export const archiveFiles = [
  new FileSpecs(
    "2024",
    "Kinds_of_Kindness_65.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/2024/",
    ["lists", "year"],
    "2024-12-31"
  ),
  new FileSpecs(
    "2023",
    "2023",
    "",
    "https://letterboxd.com/michaelbeebe/list/2023/",
    ["lists", "year"],
    "2023-12-31"
  ),
  new FileSpecs(
    "2022",
    "2022",
    "",
    "https://letterboxd.com/michaelbeebe/list/2022/",
    ["lists", "year"],
    "2022-12-31"
  ),
  new FileSpecs(
    "2021",
    "2021",
    "",
    "https://letterboxd.com/michaelbeebe/list/2021/",
    ["lists", "year"],
    "2021-12-31"
  ),
  new FileSpecs(
    "2020",
    "Tenet_005.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/2020/",
    ["lists", "year"],
    "2020-12-31"
  ),
  new FileSpecs(
    "2019",
    "2019",
    "",
    "https://letterboxd.com/michaelbeebe/list/2019/",
    ["lists", "year"],
    "2019-12-31"
  ),
  new FileSpecs(
    "2018",
    "2018",
    "",
    "https://letterboxd.com/michaelbeebe/list/2018/",
    ["lists", "year"],
    "2018-12-31"
  ),
  new FileSpecs(
    "2017",
    "2017",
    "",
    "https://letterboxd.com/michaelbeebe/list/2017/",
    ["lists", "year"],
    "2017-12-31"
  ),
  new FileSpecs(
    "2016",
    "2016",
    "",
    "https://letterboxd.com/michaelbeebe/list/2016/",
    ["lists", "year"],
    "2016-12-31"
  ),
  new FileSpecs(
    "2015",
    "2015",
    "",
    "https://letterboxd.com/michaelbeebe/list/2015/",
    ["lists", "year"],
    "2015-12-31"
  ),
];
