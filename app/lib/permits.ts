export interface PermitData {
  city: string;
  slug: string;
  processingTime: string;
  fees: { type: string; cost: string }[];
  requirements: string[];
  contact: { name: string; phone: string; portalUrl: string };
  bylawLink: string;
  denialReasons: string[];
}

export const permits: PermitData[] = [
  {
    city: "Toronto",
    slug: "toronto",
    processingTime: "15-20 business days (Standard), 25-35 business days (Heritage)",
    fees: [
      { type: "Wall Signs", cost: "$369 base + $24 per sq meter" },
      { type: "Ground/Pylon Signs", cost: "$487 base + $32 per sq meter" },
      { type: "Projecting Signs", cost: "$425 base + $28 per sq meter" }
    ],
    requirements: [
      "Building Permit Application Form (Application to Construct or Demolish)",
      "Detailed site plan showing exact sign location, setbacks, and dimensions",
      "Engineered drawings signed and sealed by a P.Eng (required for signs >6 sq meters)",
      "Photos of the existing building facade and mounting surface",
      "Proof of property ownership or written tenant authorization"
    ],
    contact: {
      name: "Toronto Building Division",
      phone: "416-397-5330",
      portalUrl: "https://www.toronto.ca/services-payments/building-construction/sign-permits-information/"
    },
    bylawLink: "https://www.toronto.ca/legdocs/municode/1184_694.pdf",
    denialReasons: [
      "Failure to adhere to strict Heritage Conservation District guidelines",
      "Sign exceeds maximum allowed percentage of the building facade",
      "Missing structural engineering seals for large or heavy installations",
      "Inadequate property line setback measurements"
    ]
  },
  {
    city: "Vaughan",
    slug: "vaughan",
    processingTime: "10-20 business days (depending on sign variance requirements)",
    fees: [
      { type: "Fascia/Wall Signs", cost: "$350 base + $20 per sq meter" },
      { type: "Ground Signs", cost: "$450 base + $25 per sq meter" },
      { type: "Sign Variance Application", cost: "$1,200 non-refundable fee" }
    ],
    requirements: [
      "Completed Sign Permit Application Package",
      "Detailed elevation drawings showing sign composition and mounting methods",
      "Site plan detailing property lines, daylight triangles, and existing landscaping",
      "Letter of Authorization from the property owner"
    ],
    contact: {
      name: "Vaughan Building Standards Department",
      phone: "905-832-8510",
      portalUrl: "https://www.vaughan.ca/residential/by-laws-and-enforcement/property-by-laws/sign-enforcement-and-permits"
    },
    bylawLink: "https://www.vaughan.ca/sites/default/files/2022-12/100-2022.pdf",
    denialReasons: [
      "Sign encroaches into municipal daylight triangles (blocking driver visibility)",
      "Illumination exceeds acceptable lumens strictly bordering residential zones",
      "Missing explicitly written consent from the commercial landlord or property management"
    ]
  },
  {
    city: "Mississauga",
    slug: "mississauga",
    processingTime: "15-25 business days",
    fees: [
      { type: "Fascia Signs", cost: "$385 base + $22 per sq meter" },
      { type: "Pylon/Ground Signs", cost: "$550 base + $30 per sq meter" },
      { type: "Awning Signs", cost: "$300 base fee" }
    ],
    requirements: [
      "Zoning Certificate of Occupancy",
      "Comprehensive mounting details including fastener types, depths, and wall materials",
      "Site plan confirming sign distance from neighboring residential zones",
      "Electrical Safety Authority (ESA) inspection confirmation for illuminated signs"
    ],
    contact: {
      name: "Mississauga Planning and Building",
      phone: "311 (or 905-615-4311 outside city limits)",
      portalUrl: "https://www.mississauga.ca/services-and-programs/building-and-renovating/sign-permits/"
    },
    bylawLink: "https://www.mississauga.ca/wp-content/uploads/2021/08/13101511/Sign-Bylaw-0054-2002.pdf",
    denialReasons: [
      "Overall sign width exceeds the permitted percentage of the storefront frontage",
      "Not providing certified electrical documentation for LED illuminated features",
      "Ground signs placed too close to municipal road allowances"
    ]
  },
  {
    city: "Brampton",
    slug: "brampton",
    processingTime: "10-20 business days",
    fees: [
      { type: "Fascia/Wall Signs", cost: "$375 base + $22 per sq meter" },
      { type: "Ground/Pylon Signs", cost: "$500 base + $28 per sq meter" },
      { type: "Portable Signs (A-frames)", cost: "$150 annual permit" }
    ],
    requirements: [
      "Completed Sign Permit Application Form",
      "Scaled elevation drawings showing sign dimensions, colours, and materials",
      "Site plan indicating sign location relative to property lines and road allowances",
      "Written consent from the registered property owner",
      "Electrical permit for illuminated signs (obtained through ESA)"
    ],
    contact: {
      name: "Brampton Building Division",
      phone: "905-874-2400",
      portalUrl: "https://www.brampton.ca/EN/residents/By-Law-Enforcement/Pages/Signs.aspx"
    },
    bylawLink: "https://www.brampton.ca/EN/residents/By-Law-Enforcement/Pages/Signs.aspx",
    denialReasons: [
      "Sign does not conform to the zoning by-law for the specific commercial district",
      "Missing electrical permits for illuminated channel letters or cabinet signs",
      "Ground sign height exceeds the maximum 8-meter restriction"
    ]
  },
  {
    city: "Markham",
    slug: "markham",
    processingTime: "15-25 business days",
    fees: [
      { type: "Fascia/Wall Signs", cost: "$390 base + $20 per sq meter" },
      { type: "Ground/Pylon Signs", cost: "$520 base + $30 per sq meter" },
      { type: "Directory Signs", cost: "$350 base fee" }
    ],
    requirements: [
      "Building Permit Application for Sign Installation",
      "Completed sign design drawings with dimensions, materials, and colour specifications",
      "Site plan showing sign placement relative to lot lines and adjacent buildings",
      "Structural engineering report for signs exceeding 5 sq meters or projecting signs",
      "Landlord authorization letter (for tenants)"
    ],
    contact: {
      name: "Markham Building Standards",
      phone: "905-477-7000",
      portalUrl: "https://www.markham.ca/economic-development-business/building-permits"
    },
    bylawLink: "https://www.markham.ca/economic-development-business/building-permits",
    denialReasons: [
      "Sign area exceeds the maximum permitted coverage for the building facade",
      "Non-compliance with Markham's urban design guidelines in heritage or downtown areas",
      "Insufficient engineering documentation for heavy or cantilevered installations"
    ]
  },
  {
    city: "Richmond Hill",
    slug: "richmond-hill",
    processingTime: "10-20 business days",
    fees: [
      { type: "Fascia Signs", cost: "$350 base + $18 per sq meter" },
      { type: "Ground Signs", cost: "$475 base + $26 per sq meter" },
      { type: "Awning/Canopy Signs", cost: "$280 base fee" }
    ],
    requirements: [
      "Sign Permit Application Form",
      "Detailed drawings indicating sign type, dimensions, height, and materials",
      "Site grading plan for ground-mounted signs",
      "Photos of the existing building facade",
      "Authorization from the property owner"
    ],
    contact: {
      name: "Richmond Hill Building and Infrastructure Services",
      phone: "905-771-8800",
      portalUrl: "https://www.richmondhill.ca/en/business/Sign-Permit.aspx"
    },
    bylawLink: "https://www.richmondhill.ca/en/business/Sign-Permit.aspx",
    denialReasons: [
      "Sign placement conflicts with Richmond Hill's streetscape design standards",
      "Ground signs encroach on required visibility triangles at intersections",
      "Missing proof of ESA inspection for illuminated signage"
    ]
  },
  {
    city: "Oakville",
    slug: "oakville",
    processingTime: "15-25 business days",
    fees: [
      { type: "Wall/Fascia Signs", cost: "$400 base + $22 per sq meter" },
      { type: "Ground/Pylon Signs", cost: "$550 base + $30 per sq meter" },
      { type: "Temporary Signs", cost: "$125 per permit" }
    ],
    requirements: [
      "Sign Permit Application through the Town of Oakville portal",
      "Architectural drawings showing sign design, dimensions, and location on the building",
      "Site plan for ground signs showing setbacks from property lines and municipal rights-of-way",
      "Structural engineering certification for signs exceeding 6 sq meters",
      "Written property owner consent"
    ],
    contact: {
      name: "Oakville Building Services",
      phone: "905-845-6601",
      portalUrl: "https://www.oakville.ca/business-development/building-permits-inspections/"
    },
    bylawLink: "https://www.oakville.ca/business-development/sign-permits/",
    denialReasons: [
      "Non-conformity with Oakville's Sign By-law in heritage or Lakeshore areas",
      "Excessive illumination levels near residential neighbourhood borders",
      "Sign projection extends beyond the allowable distance from the building face"
    ]
  },
  {
    city: "Burlington",
    slug: "burlington",
    processingTime: "10-20 business days",
    fees: [
      { type: "Fascia/Wall Signs", cost: "$380 base + $20 per sq meter" },
      { type: "Ground Signs", cost: "$500 base + $28 per sq meter" },
      { type: "Awning Signs", cost: "$275 base fee" }
    ],
    requirements: [
      "Sign Permit Application Form",
      "Elevation drawings with sign dimensions, colours, materials, and illumination details",
      "Site plan showing sign location and proximity to lot lines",
      "Letter of authorization from the property owner or management company",
      "Electrical permits for any illuminated signage components"
    ],
    contact: {
      name: "Burlington Building and By-law",
      phone: "905-335-7600",
      portalUrl: "https://www.burlington.ca/en/services-for-you/sign-permits.asp"
    },
    bylawLink: "https://www.burlington.ca/en/services-for-you/sign-permits.asp",
    denialReasons: [
      "Sign does not meet Downtown Burlington design standards",
      "Pylon sign height exceeds maximum allowable limits for the commercial zone",
      "Missing companion electrical permit from the Electrical Safety Authority"
    ]
  },
  {
    city: "Ajax",
    slug: "ajax",
    processingTime: "10-15 business days",
    fees: [
      { type: "Wall/Fascia Signs", cost: "$325 base + $18 per sq meter" },
      { type: "Ground/Pylon Signs", cost: "$450 base + $25 per sq meter" },
      { type: "Banner Signs", cost: "$100 per permit" }
    ],
    requirements: [
      "Completed Sign Permit Application",
      "Scaled drawings showing sign design, size, height, and materials",
      "Site plan with the sign's proposed location and property line distances",
      "Property owner's written authorization",
      "Electrical Safety Authority (ESA) permit for illuminated signs"
    ],
    contact: {
      name: "Ajax Planning and Development Services",
      phone: "905-619-2529",
      portalUrl: "https://www.ajax.ca/en/business-and-development/sign-permits.aspx"
    },
    bylawLink: "https://www.ajax.ca/en/business-and-development/sign-permits.aspx",
    denialReasons: [
      "Sign design does not conform to the commercial area's zoning requirements",
      "Missing structural analysis for large ground-mounted or pylon installations",
      "Application submitted without valid property owner consent"
    ]
  },
  {
    city: "Pickering",
    slug: "pickering",
    processingTime: "10-20 business days",
    fees: [
      { type: "Fascia/Wall Signs", cost: "$340 base + $20 per sq meter" },
      { type: "Ground/Pylon Signs", cost: "$475 base + $26 per sq meter" },
      { type: "Temporary/Portable Signs", cost: "$120 per permit" }
    ],
    requirements: [
      "Sign Permit Application Form",
      "Detailed sign drawings including dimensions, colours, and construction materials",
      "Site plan indicating the sign's location relative to property boundaries and roadways",
      "Owner authorization or lease agreement documentation",
      "ESA electrical permit for all illuminated sign types"
    ],
    contact: {
      name: "Pickering City Development Department",
      phone: "905-420-4660",
      portalUrl: "https://www.pickering.ca/en/business/sign-permits.aspx"
    },
    bylawLink: "https://www.pickering.ca/en/business/sign-permits.aspx",
    denialReasons: [
      "Sign exceeds the maximum allowable area for the building's commercial zoning",
      "Ground sign placement violates required setbacks from the highway or road allowance",
      "Illumination not compliant with Pickering's light pollution control standards"
    ]
  }
];

export function getPermitBySlug(slug: string): PermitData | undefined {
  return permits.find(p => p.slug === slug);
}
