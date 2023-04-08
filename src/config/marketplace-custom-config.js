/*
 * Marketplace specific configuration.
 *
 * Every filter needs to have following keys:
 * - id:     Unique id of the filter.
 * - label:  The default label of the filter.
 * - type:   String that represents one of the existing filter components:
 *           BookingDateRangeFilter, KeywordFilter, PriceFilter,
 *           SelectSingleFilter, SelectMultipleFilter.
 * - group:  Is this 'primary' or 'secondary' filter?
 *           Primary filters are visible on desktop layout by default.
 *           Secondary filters are behind "More filters" button.
 *           Read more from src/containers/SearchPage/README.md
 * - queryParamNames: Describes parameters to be used with queries
 *                    (e.g. 'price' or 'pub_amenities'). Most of these are
 *                    the same between webapp URLs and API query params.
 *                    You can't change 'dates', 'price', or 'keywords'
 *                    since those filters are fixed to a specific attribute.
 * - config: Extra configuration that the filter component needs.
 *
 * Note 1: Labels could be tied to translation file
 *         by importing FormattedMessage:
 *         <FormattedMessage id="some.translation.key.here" />
 *
 * Note 2: If you need to add new custom filter components,
 *         you need to take those into use in:
 *         src/containers/SearchPage/FilterComponent.js
 *
 * Note 3: If you just want to create more enum filters
 *         (i.e. SelectSingleFilter, SelectMultipleFilter),
 *         you can just add more configurations with those filter types
 *         and tie them with correct extended data key
 *         (i.e. pub_<key> or meta_<key>).
 */

export const filters = [
  {
    id: 'top_categories',
    label: 'Top Categories',
    type: 'SelectMultipleFilter',
    group: 'primary',
    queryParamNames: ['pub_category'],
    config: {
      // Schema type is enum for SelectSingleFilter
      schemaType: 'enum',

      // "key" is the option you see in Flex Console.
      // "label" is set here for the UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'figurines', label: 'Figurines' },
        { key: 'trading_cards', label: 'Trading Cards' },
        { key: 'comics_books_manga', label: 'Comics/Books/Manga' },
        { key: 'video_games', label: 'Video Games' },
        { key: 'apparel', label: 'Apparel' },
      ],
    },
  },
  {
    id: 'brands',
    label: 'Top Brands',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_brands'],
    config: {
      // Schema type is enum for SelectSingleFilter
      schemaType: 'enum',

      // "key" is the option you see in Flex Console.
      // "label" is set here for the UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'funko_pop', label: 'Funko Pop!' },
        { key: 'hot_toys', label: 'Hot Toys' },
        { key: 'neca', label: 'NECA' },
        { key: 'bandai_namco', label: 'Bandai Namco' },
        { key: 'good_smile_company', label: 'Good Smile Company' },
        { key: 'kotobukiya', label: 'Kotobukiya' },
        { key: 'square_enix', label: 'Square Enix' },
        { key: 'max_factory', label: 'Max Factory' },
        { key: 'alter', label: 'Alter' },
        { key: 'megahouse', label: 'Megahouse' },
        { key: 'banpresto', label: 'Banpresto' },
        { key: 'diamond_select_toys', label: 'Diamond Select Toys' },
        { key: 'revoltech', label: 'Revoltech' },
        { key: 'figma', label: 'Figma' },
        { key: 'medicom_toy', label: 'Medicom Toy' },
        { key: 'gundam', label: 'Gundam Gunpla' },
      ],
    },
  },
  {
    id: 'fandom_series',
    label: 'Top Fandoms',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_fandoms'],
    config: {
      // Schema type options: 'enum', 'multi-enum'
      // Both types can work so that user selects multiple values when filtering search results.
      // With "enum" the functionality will be OR-semantics (Nike OR Adidas OR Salomon)
      // With "multi-enum" it's possible to use both AND and OR semantics with searchMode config.
      schemaType: 'enum',

      // "key" is the option you see in Flex Console.
      // "label" is set here for the UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'harry_potter', label: 'Harry Potter' },  { key: 'star_wars', label: 'Star Wars' },  { key: 'marvel_comics', label: 'Marvel Comics' },  { key: 'dc_comics', label: 'DC Comics' },  { key: 'game_of_thrones', label: 'Game of Thrones' },  { key: 'doctor_who', label: 'Doctor Who' },  { key: 'lord_of_the_rings', label: 'Lord of the Rings' },  { key: 'the_walking_dead', label: 'The Walking Dead' },  { key: 'stranger_things', label: 'Stranger Things' },  { key: 'sherlock', label: 'Sherlock' },  { key: 'pokemon', label: 'Pokemon' },  { key: 'star_trek', label: 'Star Trek' },  { key: 'the_avengers', label: 'The Avengers' },  { key: 'the_hobbit', label: 'The Hobbit' },  { key: 'doctor_strange', label: 'Doctor Strange' },  { key: 'x-men', label: 'X-Men' },  { key: 'avatar_the_last_airbender', label: 'Avatar: The Last Airbender' },  { key: 'deadpool', label: 'Deadpool' },  { key: 'spider-man', label: 'Spider-Man' },  { key: 'batman', label: 'Batman' },  { key: 'superman', label: 'Superman' },  { key: 'iron_man', label: 'Iron Man' },  { key: 'captain_america', label: 'Captain America' },  { key: 'thor', label: 'Thor' },  { key: 'wonder_woman', label: 'Wonder Woman' },  { key: 'black_panther', label: 'Black Panther' },  { key: 'the_flash', label: 'The Flash' },  { key: 'green_lantern', label: 'Green Lantern' },  { key: 'spider-man_no_way_home', label: 'Spider-Man: No Way Home' },  { key: 'disney', label: 'Disney' },
      ],
    },
  },
  {
    id: 'anime_series',
    label: 'Top Anime',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_anime'],
    config: {
      // Schema type options: 'enum', 'multi-enum'
      // Both types can work so that user selects multiple values when filtering search results.
      // With "enum" the functionality will be OR-semantics (Nike OR Adidas OR Salomon)
      // With "multi-enum" it's possible to use both AND and OR semantics with searchMode config.
      schemaType: 'enum',

      // "key" is the option you see in Flex Console.
      // "label" is set here for the UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'attack_on_titan', label: 'Attack on Titan' },
        { key: 'demon_slayer', label: 'Demon Slayer' },
        { key: 'one_piece', label: 'One Piece' },
        { key: 'naruto', label: 'Naruto' },
        { key: 'my_hero_academia', label: 'My Hero Academia' },
        { key: 'death_note', label: 'Death Note' },
        { key: 'fullmetal_alchemist_brotherhood', label: 'Fullmetal Alchemist: Brotherhood' },
        { key: 'hunter_x_hunter', label: 'Hunter x Hunter' },
        { key: 'sword_art_online', label: 'Sword Art Online' },
        { key: 'cowboy_bebop', label: 'Cowboy Bebop' },
        { key: 'bleach', label: 'Bleach' },
        { key: 'dragon_ball_z', label: 'Dragon Ball Z' },
        { key: 'neon_genesis_evangelion', label: 'Neon Genesis Evangelion' },
        { key: 'fairy_tail', label: 'Fairy Tail' },
        { key: 'one_punch_man', label: 'One Punch Man' },
        { key: 'jojos_bizarre_adventure', label: 'JoJo\'s Bizarre Adventure' },
        { key: 'code_geass', label: 'Code Geass' },
        { key: 'steins_gate', label: 'Steins;Gate' },
        { key: 'gintama', label: 'Gintama' },
        { key: 'black_clover', label: 'Black Clover' },
        { key: 'my_neighbor_totoro', label: 'My Neighbor Totoro' },
        { key: 'violet_evergarden', label: 'Violet Evergarden' },
        { key: 'kimi_no_na_wa', label: 'Your Name' },
        { key: 'no_game_no_life', label: 'No Game No Life' },
        { key: 'toradora', label: 'Toradora!' },
        { key: 'your_lie_in_april', label: 'Your Lie in April' },
        { key: 'mob_psycho_100', label: 'Mob Psycho 100' },
        { key: 'konosuba', label: 'KonoSuba' },
        { key: 're_zero', label: 'Re:Zero' },
        { key: 'clannad', label: 'Clannad' },
        { key: 'angel_beats', label: 'Angel Beats!' },
        { key: 'monster', label: 'Monster' },
        { key: 'grave_of_the_fireflies', label: 'Grave of the Fireflies' },
        { key: 'akira', label: 'Akira' },
        { key: 'princess_mononoke', label: 'Princess Mononoke' },
        { key: 'spirited_away', label: 'Spirited Away' },
        { key: 'death_parade', label: 'Death Parade' },
        { key: 'perfect_blue', label: 'Perfect Blue' },
        { key: 'paprika', label: 'Paprika' },
        { key: 'tokyo_ghoul', label: 'Tokyo Ghoul' },
        { key: 'parasyte', label: 'Parasyte' },
      ],
    },
  },
  {
    id: 'video_game_series',
    label: 'Top Video Games',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_video_games'],
    config: {
      // Schema type options: 'enum', 'multi-enum'
      // Both types can work so that user selects multiple values when filtering search results.
      // With "enum" the functionality will be OR-semantics (Nike OR Adidas OR Salomon)
      // With "multi-enum" it's possible to use both AND and OR semantics with searchMode config.
      schemaType: 'enum',

      // "key" is the option you see in Flex Console.
      // "label" is set here for the UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
          { key: 'the_legend_of_zelda', label: 'The Legend of Zelda' },
          { key: 'super_mario_bros', label: 'Super Mario Bros.' },
          { key: 'grand_theft_auto', label: 'Grand Theft Auto' },
          { key: 'tetris', label: 'Tetris' },
          { key: 'the_last_of_us', label: 'The Last of Us' },
          { key: 'minecraft', label: 'Minecraft' },
          { key: 'metal_gear_solid', label: 'Metal Gear Solid' },
          { key: 'red_dead_redemption', label: 'Red Dead Redemption' },
          { key: 'final_fantasy', label: 'Final Fantasy' },
          { key: 'half_life', label: 'Half-Life' },
          { key: 'resident_evil', label: 'Resident Evil' },
          { key: 'portal', label: 'Portal' },
          { key: 'world_of_warcraft', label: 'World of Warcraft' },
          { key: 'the_witcher', label: 'The Witcher' },
          { key: 'god_of_war', label: 'God of War' },
          { key: 'street_fighter', label: 'Street Fighter' },
          { key: 'super_mario', label: 'Super Mario' },
          { key: 'mass_effect', label: 'Mass Effect' },
          { key: 'chrono_trigger', label: 'Chrono Trigger' },
          { key: 'diablo', label: 'Diablo' },
          { key: 'bioshock', label: 'BioShock' },
          { key: 'dark_souls', label: 'Dark Souls' },
          { key: 'counter_strike', label: 'Counter-Strike' },
          { key: 'super_smash_bros', label: 'Super Smash Bros.' },
          { key: 'persona', label: 'Persona' },
          { key: 'uncharted', label: 'Uncharted' },
          { key: 'the_elder_scrolls', label: 'The Elder Scrolls' },
          { key: 'fallout', label: 'Fallout' },
          { key: 'super_metroid', label: 'Super Metroid' },
          { key: 'halo', label: 'Halo' },
          { key: 'shadow_of_the_colossus', label: 'Shadow of the Colossus' },
          { key: 'dota_2', label: 'Dota 2' },
      ],
    },
  },
  {
    id: 'all_categories',
    label: 'All Categories',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_category'],
    config: {
      // Schema type is enum for SelectSingleFilter
      schemaType: 'enum',

      // "key" is the option you see in Flex Console.
      // "label" is set here for the UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'figurines', label: 'Figurines' },  { key: 'statues', label: 'Statues' },  { key: 'action_figures', label: 'Action Figures' },  { key: 'plush_toys', label: 'Plush Toys' },  { key: 'prop_replicas', label: 'Prop Replicas' },  { key: 'trading_cards', label: 'Trading Cards' },  { key: 'comics_books_manga', label: 'Comics/Books/Manga' },  { key: 'art_prints', label: 'Art Prints' },  { key: 'posters', label: 'Posters' },  { key: 'video_games', label: 'Video Games' },  { key: 'board_games', label: 'Board Games' },  { key: 'puzzles', label: 'Puzzles' },  { key: 'apparel', label: 'Apparel' },  { key: 't-shirts', label: 'T-Shirts' },  { key: 'hoodies_sweatshirts', label: 'Hoodies/Sweatshirts' },  { key: 'jackets', label: 'Jackets' },  { key: 'hats', label: 'Hats' },  { key: 'socks', label: 'Socks' },  { key: 'accessories', label: 'Accessories' },  { key: 'wallets', label: 'Wallets' },  { key: 'backpacks', label: 'Backpacks' },  { key: 'pins_badges', label: 'Pins/Badges' },  { key: 'keychains', label: 'Keychains' },  { key: 'lanyards', label: 'Lanyards' },  { key: 'phone_cases', label: 'Phone Cases' },  { key: 'mugs', label: 'Mugs' },  { key: 'drinkware', label: 'Drinkware' },  { key: 'home_decor', label: 'Home Decor' },  { key: 'figures_and_statues', label: 'Figures and Statues' },  { key: 'bedding', label: 'Bedding' },  { key: 'bath_towels', label: 'Bath Towels' },  { key: 'throw_blankets', label: 'Throw Blankets' },  { key: 'ornaments', label: 'Ornaments' }
      ],
    },
  },
  {
    id: 'price',
    label: 'Price',
    type: 'PriceFilter',
    group: 'primary',
    // Note: PriceFilter is fixed filter,
    // you can't change "queryParamNames: ['price'],"
    queryParamNames: ['price'],
    // Price filter configuration
    // Note: unlike most prices this is not handled in subunits
    config: {
      min: 0,
      max: 999999,
      step: 3,
    },
  },
  {
    id: 'keyword',
    label: 'Keyword',
    type: 'KeywordFilter',
    group: 'primary',
    // Note: KeywordFilter is fixed filter,
    // you can't change "queryParamNames: ['keywords'],"
    queryParamNames: ['keywords'],
    // NOTE: If you are ordering search results by distance
    // the keyword search can't be used at the same time.
    // You can turn on/off ordering by distance from config.js file.
    config: {},
  },

  // Here is an example of multi-enum search filter.
  //
  // {
  //   id: 'amenities',
  //   label: 'Amenities',
  //   type: 'SelectMultipleFilter',
  //   group: 'secondary',
  //   queryParamNames: ['pub_amenities'],
  //   config: {
  //     // Schema type options: 'enum', 'multi-enum'
  //     // Both types can work so that user selects multiple values when filtering search results.
  //     // With "enum" the functionality will be OR-semantics (Nike OR Adidas OR Salomon)
  //     // With "multi-enum" it's possible to use both AND and OR semantics with searchMode config.
  //     schemaType: 'multi-enum',

  //     // Optional modes: 'has_all', 'has_any'
  //     // Note: this is relevant only for schema type 'multi-enum'
  //     // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
  //     searchMode: 'has_all',

  //     // "key" is the option you see in Flex Console.
  //     // "label" is set here for this web app's UI only.
  //     // Note: label is not added through the translation files
  //     // to make filter customizations a bit easier.
  //     options: [
  //       { key: 'towels', label: 'Towels' },
  //       { key: 'bathroom', label: 'Bathroom' },
  //       { key: 'swimming_pool', label: 'Swimming pool' },
  //       { key: 'barbeque', label: 'Barbeque' },
  //     ],
  //   },
  // },
];

export const sortConfig = {
  // Enable/disable the sorting control in the SearchPage
  active: true,

  // Note: queryParamName 'sort' is fixed,
  // you can't change it since Flex API expects it to be named as 'sort'
  queryParamName: 'sort',

  // Internal key for the relevance option, see notes below.
  relevanceKey: 'relevance',

  // Relevance key is used with keywords filter.
  // Keywords filter also sorts results according to relevance.
  relevanceFilter: 'keywords',

  // Keyword filter is sorting the results by relevance.
  // If keyword filter is active, one might want to disable other sorting options
  // by adding 'keyword' to this list.
  conflictingFilters: [],

  options: [
    { key: 'createdAt', label: 'Newest' },
    { key: '-createdAt', label: 'Oldest' },
    { key: '-price', label: 'Lowest price' },
    { key: 'price', label: 'Highest price' },

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: 'Relevance', longLabel: 'Relevance (Keyword search)' },
  ],
};

export const listing = {
  // These should be listing details from public data with schema type: enum
  // SectionDetailsMaybe component shows these on listing page.
  enumFieldDetails: ['size', 'brand', 'category'],
};
