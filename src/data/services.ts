import {
  Cable,
  ClipboardCheck,
  Cog,
  House,
  KeyRound,
  KeySquare,
  Power,
  Smartphone,
  Warehouse,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Category = "locksmith" | "garage-doors";

export type Faq = { q: string; a: string };

export type Service = {
  category: Category;
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  intro: string[];
  problems: string[];
  process: { title: string; text: string }[];
  faqs: Faq[];
};

export const categories: Record<
  Category,
  { label: string; path: string; title: string; summary: string; image: string; imageAlt: string }
> = {
  locksmith: {
    label: "Locksmith",
    path: "/locksmith",
    title: "Locksmith services",
    summary:
      "Lockouts, rekeys, new locks and smart locks for homes and businesses. An experienced locksmith can be at your door quickly.",
    image: "1773425350177-af4d2249d641",
    imageAlt: "Keys and a padlock beside a blue toolbox",
  },
  "garage-doors": {
    label: "Garage doors",
    path: "/garage-doors",
    title: "Garage door services",
    summary:
      "Broken springs, dead openers, doors off their tracks and full replacements. Our trucks carry common parts, so most repairs are finished on the first visit.",
    image: "1605276374104-dee2a0ed3cd6",
    imageAlt: "A house with a wide garage door under a blue sky",
  },
};

export const services: Service[] = [
  // ——— Locksmith ———
  {
    category: "locksmith",
    slug: "emergency-lockout",
    title: "Emergency lockout",
    short: "Locked out of your home or office? We open it without damage.",
    icon: KeyRound,
    image: "1759452003649-552896c8ed63",
    imageAlt: "A key inserted into a door lock",
    intro: [
      "Getting locked out rarely happens at a good time. Call us and a technician heads your way, usually arriving within 30 minutes anywhere in our service area.",
      "We use non-destructive entry first: picking, bypass tools and lock decoding. Drilling is a last resort, and we tell you before we do it. Before any work starts, we ask for ID that shows you live at or own the property.",
    ],
    problems: [
      "Keys locked inside the house or apartment",
      "Lost or stolen keys",
      "Key snapped off in the lock",
      "Lock jammed or won't turn",
      "Locked out of an office or storage unit",
      "Electronic lock with a dead battery",
    ],
    process: [
      { title: "Call us", text: "Tell us where you are and what's locked, and ask for a quote." },
      { title: "We arrive", text: "A technician arrives and checks ID before starting." },
      { title: "You're back in", text: "We open the door, and can rekey or replace the lock on the spot if keys are missing." },
    ],
    faqs: [
      {
        q: "How much does a lockout cost?",
        a: "It depends on the lock and the situation. Call us or send a request to get a quote.",
      },
      {
        q: "Will opening the lock damage my door?",
        a: "In most cases, no. We pick or bypass the lock. If a lock is high-security or broken, we explain the options before drilling.",
      },
      {
        q: "What if I've lost my keys for good?",
        a: "After we let you in, we can rekey the lock so the old keys no longer work, and cut you a fresh set.",
      },
    ],
  },
  {
    category: "locksmith",
    slug: "residential-locksmith",
    title: "Residential locksmith",
    short: "Deadbolts, handle sets and door hardware installed, repaired or upgraded for your home.",
    icon: House,
    image: "1607710533910-d7cdffd9e593",
    imageAlt: "A brass lever handle on a wooden front door",
    intro: [
      "Your front door is only as secure as the lock on it. We install and repair deadbolts, handle sets, patio and sliding door locks, and window locks on houses, condos and rentals.",
      "We carry Grade 1 and Grade 2 hardware from brands like Schlage, Weiser and Kwikset, and we'll tell you honestly whether a repair or a replacement makes more sense.",
    ],
    problems: [
      "Just moved in and don't know who has keys",
      "Deadbolt sticking, grinding or hard to turn",
      "Loose or wobbly door handle",
      "Patio or sliding door lock that won't latch",
      "Want one key for every door in the house",
      "Upgrading after a break-in",
    ],
    process: [
      { title: "Assess", text: "We check each door, frame and strike plate, not only the lock." },
      { title: "Recommend", text: "You get clear options: repair, rekey or replace." },
      { title: "Install", text: "We fit and test the hardware, and reinforce the strike plate when needed." },
    ],
    faqs: [
      {
        q: "Should I rekey or replace my locks after moving?",
        a: "If the existing locks work well, rekeying is cheaper and just as secure against old keys. Replace them if they're worn, low-grade or you want a different style.",
      },
      {
        q: "Can you make all my doors use one key?",
        a: "Yes. If the locks share a compatible keyway, we can rekey them all to a single key in one visit.",
      },
    ],
  },
  {
    category: "locksmith",
    slug: "lock-rekey-change",
    title: "Lock rekey & change",
    short: "Make old keys useless in minutes, or swap your locks for new hardware.",
    icon: KeySquare,
    image: "1635237393049-55046279ebb8",
    imageAlt: "A bunch of keys on a table",
    intro: [
      "Rekeying changes the pins inside your existing lock so old keys stop working, without replacing the hardware. It's the quickest and most affordable way to secure a home after a move, a lost key or a tenant change.",
      "If your locks are worn or you want an upgrade, we'll replace them instead and match the finish to your door.",
    ],
    problems: [
      "Moved into a new home",
      "Lost keys or keys stolen",
      "Roommate or tenant moved out",
      "Ex-employee still has a key",
      "Locks are old, worn or mismatched",
      "Want a higher-security cylinder",
    ],
    process: [
      { title: "Check the locks", text: "We confirm whether each lock can be rekeyed or should be replaced." },
      { title: "Rekey or replace", text: "We repin the cylinders or fit new hardware." },
      { title: "New keys", text: "You get a fresh set of cut keys, tested in every lock." },
    ],
    faqs: [
      {
        q: "How long does rekeying take?",
        a: "About 10 to 15 minutes per lock for most residential cylinders.",
      },
      {
        q: "Is rekeying as secure as new locks?",
        a: "Against old keys, yes. If you also want better pick or bump resistance, upgrade to a high-security cylinder.",
      },
    ],
  },
  {
    category: "locksmith",
    slug: "smart-lock-installation",
    title: "Smart lock installation",
    short: "Keypad, Wi-Fi and fingerprint locks installed, set up and paired with your phone.",
    icon: Smartphone,
    image: "1558002038-1055907df827",
    imageAlt: "A smartphone held up beside a front door",
    intro: [
      "Smart locks let you open your door with a code, a phone or a fingerprint, and give temporary access to guests, cleaners or dog walkers. We install them properly so they line up, lock smoothly and don't drain batteries.",
      "We'll help you choose a model that fits your door and then set it up on your phone before we leave.",
    ],
    problems: [
      "Bought a smart lock but it won't fit the door",
      "Bolt binds or doesn't fully extend",
      "Lock disconnects from Wi-Fi or app",
      "Want keyless access for a rental property",
      "Need codes for family, guests or staff",
      "Batteries draining too quickly",
    ],
    process: [
      { title: "Pick a model", text: "We check your door thickness, backset and Wi-Fi coverage." },
      { title: "Fit and align", text: "We adjust the strike so the bolt throws freely." },
      { title: "Set up", text: "We pair the lock with your app, add codes and show you how it works." },
    ],
    faqs: [
      {
        q: "Can you install a lock I already bought?",
        a: "Yes. We install customer-supplied smart locks and handle any drilling or strike adjustments needed.",
      },
      {
        q: "What happens if the battery dies?",
        a: "Most models warn you weeks ahead, and many have a backup key or emergency power contacts. We'll show you yours.",
      },
    ],
  },

  // ——— Garage doors ———
  {
    category: "garage-doors",
    slug: "garage-door-repair",
    title: "Garage door repair",
    short: "Noisy, slow, stuck or crooked doors fixed. Most repairs are done on the first visit.",
    icon: Wrench,
    image: "1696992812596-3c0d4d2d1299",
    imageAlt: "A grey garage door beside a brick wall",
    intro: [
      "A garage door is the largest moving part of most homes, and when it fails it usually fails at the worst time. Our technicians diagnose the real cause, whether that's springs, cables, rollers, hinges, panels or the opener, and fix it on the spot.",
      "Our trucks are stocked with common parts for residential and commercial doors, so you're not waiting days for a second visit.",
    ],
    problems: [
      "Door won't open or close",
      "Loud grinding, banging or squeaking",
      "Door shakes or moves unevenly",
      "Door reverses before touching the floor",
      "Dented or cracked panels",
      "Worn rollers or broken hinges",
    ],
    process: [
      { title: "Inspect", text: "We run a full safety check of springs, cables, tracks and opener." },
      { title: "Quote", text: "We explain what's wrong and give you a quote." },
      { title: "Repair and tune", text: "We fix the fault, lubricate moving parts and balance the door." },
    ],
    faqs: [
      {
        q: "Is it safe to use a garage door that's making noise?",
        a: "New noises often mean a worn part. If the door moves unevenly or one side sags, stop using it and call us, because a failing spring or cable can drop the door.",
      },
      {
        q: "Do you repair commercial overhead doors?",
        a: "Yes. We service sectional, roll-up and overhead doors for shops, warehouses and strata buildings.",
      },
    ],
  },
  {
    category: "garage-doors",
    slug: "spring-replacement",
    title: "Spring replacement",
    short: "Broken torsion or extension springs replaced safely, matched to your door's weight.",
    icon: Cog,
    image: "1530124566582-a618bc2615dc",
    imageAlt: "A set of mechanic's tools laid out",
    intro: [
      "Springs do the heavy lifting, not the opener. When one breaks you'll usually hear a loud bang, and the door becomes too heavy to lift. Springs hold enormous tension, so replacing them is a job for a trained technician.",
      "We weigh and measure your door, fit correctly rated springs (often high-cycle springs that last longer), and rebalance the door so your opener isn't strained.",
    ],
    problems: [
      "Loud bang from the garage, then the door won't lift",
      "Visible gap in the spring above the door",
      "Door feels extremely heavy by hand",
      "Opener strains or stops partway",
      "Door slams shut",
      "Springs are rusted or stretched",
    ],
    process: [
      { title: "Weigh and measure", text: "We size the springs to your door, not to a guess." },
      { title: "Replace", text: "We swap the springs, usually in pairs, so both sides wear evenly." },
      { title: "Balance", text: "We set the tension so the door stays put when half open." },
    ],
    faqs: [
      {
        q: "Should I replace both springs?",
        a: "Usually, yes. Springs are installed together and wear at the same rate, so if one has broken, the other is close behind.",
      },
      {
        q: "Can I replace a spring myself?",
        a: "We strongly advise against it. Torsion springs store enough energy to cause serious injury without the right tools and training.",
      },
    ],
  },
  {
    category: "garage-doors",
    slug: "opener-repair-installation",
    title: "Opener repair & installation",
    short: "Chain, belt and wall-mount openers repaired or installed, with remotes and keypads programmed.",
    icon: Power,
    image: "1762568742298-bdb91e2cbdd9",
    imageAlt: "A detached garage with a driveway in front",
    intro: [
      "If the door works by hand but not with the button, the opener is the likely culprit. We repair and replace chain, belt and wall-mount (jackshaft) openers, and set up remotes, keypads and smartphone control.",
      "Upgrading? Belt-drive openers are much quieter than chain drives, which matters most when there's a bedroom above the garage.",
    ],
    problems: [
      "Opener hums but the door doesn't move",
      "Remote or keypad stopped working",
      "Door reverses for no reason",
      "Safety sensors blinking",
      "Opener is loud or old",
      "Want to open the garage from your phone",
    ],
    process: [
      { title: "Diagnose", text: "We test the logic board, motor, gears, sensors and limits." },
      { title: "Repair or replace", text: "We fix the fault, or install a new opener if repair doesn't make sense." },
      { title: "Program", text: "We pair remotes, keypads and the app, and set force and travel limits." },
    ],
    faqs: [
      {
        q: "How long does a garage door opener last?",
        a: "Typically 10 to 15 years. If yours is older and needs a major part, replacing it is often better value.",
      },
      {
        q: "Why does my door go back up before closing?",
        a: "Usually the safety sensors are misaligned or dirty, or the close-force setting needs adjusting. It's a quick fix.",
      },
    ],
  },
  {
    category: "garage-doors",
    slug: "off-track-cable-repair",
    title: "Off-track & cable repair",
    short: "Doors that have jumped their tracks, frayed or snapped cables, and bent tracks repaired.",
    icon: Cable,
    image: "1721152395209-f9ca76755948",
    imageAlt: "A closed garage door with a sign on it",
    intro: [
      "A door that's crooked, hanging, or has rollers out of the track is unsafe to operate. It can fall or twist further. Leave it where it is and call us.",
      "We secure the door, re-seat the rollers, straighten or replace bent track sections and install new lift cables so the door runs level again.",
    ],
    problems: [
      "Door hanging at an angle",
      "Rollers popped out of the track",
      "Cable snapped or unwound from the drum",
      "Track bent after a car bump",
      "Gap under one side of the door",
      "Door stuck partway open",
    ],
    process: [
      { title: "Secure", text: "We clamp the door so it can't move while we work." },
      { title: "Realign", text: "We straighten or replace tracks and re-seat the rollers." },
      { title: "Re-cable and test", text: "We fit new cables, balance the door and run it through full cycles." },
    ],
    faqs: [
      {
        q: "What causes a door to come off its track?",
        a: "Common causes are a broken cable, worn rollers, loose track bolts or a car bumping the track.",
      },
      {
        q: "Can I keep using the door if one cable is loose?",
        a: "No. A slack cable can let one side drop suddenly. Keep the door still and keep clear of it until it's repaired.",
      },
    ],
  },
  {
    category: "garage-doors",
    slug: "new-garage-door-installation",
    title: "New garage door installation",
    short: "Insulated steel, carriage-style and glass doors supplied and installed, with old door removal.",
    icon: Warehouse,
    image: "1770756051811-1612ac8bedfa",
    imageAlt: "Modern garage doors on a white house",
    intro: [
      "A new garage door changes how your home looks and how warm your garage stays. We supply and install insulated steel, carriage-style, wood-look and full-view glass doors in standard and custom sizes.",
      "Every install includes removing and disposing of the old door, new tracks and springs sized for the new door, weather seals and a full safety test.",
    ],
    problems: [
      "Door is damaged beyond repair",
      "Garage is cold or drafty",
      "Old door is noisy and heavy",
      "Want better curb appeal before selling",
      "Converting the garage to a workshop or gym",
      "Need a wider or taller opening",
    ],
    process: [
      { title: "Measure and choose", text: "We measure the opening and walk you through styles, colours and insulation." },
      { title: "Order", text: "We order your door and schedule installation, usually within two weeks." },
      { title: "Install", text: "We remove the old door, install the new one and haul away the waste." },
    ],
    faqs: [
      {
        q: "Is an insulated door worth it?",
        a: "If your garage is attached or you use it as a workspace, yes. Insulated doors are quieter, sturdier and keep the space noticeably warmer in winter.",
      },
      {
        q: "How long does installation take?",
        a: "A standard residential door takes about half a day.",
      },
    ],
  },
  {
    category: "garage-doors",
    slug: "maintenance-tune-up",
    title: "Maintenance & tune-up",
    short: "A yearly safety check and tune-up that heads off breakdowns and extends the door's life.",
    icon: ClipboardCheck,
    image: "1731694411560-050e5b91e943",
    imageAlt: "Tools hanging on a workshop wall",
    intro: [
      "Most garage door breakdowns give warning signs months in advance. A yearly tune-up catches worn springs, frayed cables and failing rollers before they leave you stuck.",
      "Our tune-up is a checklist of more than 20 points, covering lubrication, hardware tightening, balance, opener settings and safety-reverse testing.",
    ],
    problems: [
      "Door hasn't been serviced in years",
      "Getting noisier over time",
      "Moves slower than it used to",
      "Preparing for winter",
      "Just bought a home with an older door",
      "Want to avoid emergency repair costs",
    ],
    process: [
      { title: "Inspect", text: "We check springs, cables, rollers, hinges, tracks and seals." },
      { title: "Adjust", text: "We lubricate, tighten, balance and set opener limits." },
      { title: "Report", text: "You get a written summary of anything that needs attention soon." },
    ],
    faqs: [
      {
        q: "How often should a garage door be serviced?",
        a: "Once a year for most homes, or twice a year for doors that cycle many times a day.",
      },
      {
        q: "What's included in a tune-up?",
        a: "Lubrication, hardware tightening, spring balance, cable and roller inspection, sensor alignment, and force and auto-reverse testing.",
      },
    ],
  },
];

export const byCategory = (c: Category) => services.filter((s) => s.category === c);

export const findService = (c: Category, slug: string | undefined) =>
  services.find((s) => s.category === c && s.slug === slug);

export const servicePath = (s: Service) => `${categories[s.category].path}/${s.slug}`;
