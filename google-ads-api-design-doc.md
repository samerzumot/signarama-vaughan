# Google Ads API Developer Access — Design Documentation

**Company Name:** Signarama Vaughan (Custom Business Signs)

**Website:** https://custombusinesssigns.ca

---

## Business Model

Signarama Vaughan is a custom signage company that designs, fabricates, and installs commercial signage for businesses across the Greater Toronto Area (GTA). Our services include channel letters, storefront signs, pylon signs, vehicle wraps, digital signs, LED backlit signs, light boxes, window graphics, construction signs, indoor/office signs, and custom signs.

We operate a single business website (custombusinesssigns.ca) where potential clients can browse our sign categories, view our portfolio of completed projects, and submit quote requests. We generate leads through Google Ads campaigns targeting local businesses seeking signage solutions. We only advertise for our own business and do not manage ads for any third parties.

---

## Tool Access/Use

Our tool will be used exclusively by our internal marketing team and business owner to:

1. **Monitor and optimize Google Ads campaign performance** — View real-time metrics on ad spend, impressions, clicks, conversions, and cost-per-lead across all campaigns.
2. **Automate conversion tracking and reporting** — Pull conversion data from the Google Ads API to generate weekly and monthly performance reports, allowing us to measure ROI on our advertising spend.
3. **Manage campaign budgets and bid adjustments** — Programmatically adjust bids and daily budgets based on lead volume, seasonally adjusting for peak signage demand periods (e.g., new business openings in spring/summer).
4. **Sync offline conversions** — Upload offline conversion data (signed contracts and completed installations that originated from ad clicks) back to Google Ads to improve Smart Bidding optimization.

No third-party agencies or external users will have direct access to the tool. Reports generated may be shared internally for business decision-making.

---

## Tool Design

Our tool integrates with the Google Ads API to power two key functions:

### 1. Conversion Tracking Dashboard

Our website currently tracks conversions using the Google Ads tag (AW-17956192139) embedded in our Next.js application. We track two primary conversion actions:

- **Quote form submissions** — When a visitor submits our "Get Your Free Quote" form, a conversion event is fired via `gtag("event", "conversion", { send_to: "AW-17956192139/8e71CI6OuvkbEIv_lvJC" })`.
- **Phone call clicks** — Click-to-call actions on our business phone number (905-597-8635) are tracked as conversion events.

The API tool will pull these conversion metrics into an internal dashboard, allowing us to see which campaigns, ad groups, and keywords are driving the most qualified leads.

### 2. Offline Conversion Upload

When a website lead converts into a signed contract (typically 1–4 weeks after the initial quote request), we will use the Google Ads API to upload this offline conversion data. This closes the loop between ad click and actual revenue, enabling Google's Smart Bidding algorithms to optimize for high-value conversions rather than just form fills.

### Architecture

```
┌─────────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  custombusinesssigns │     │   Internal Tool   │     │  Google Ads API │
│     .ca (Next.js)   │────▶│   (Dashboard)     │◀───▶│                 │
│                     │     │                   │     │  AW-17956192139 │
│  • Quote Form       │     │  • View metrics   │     │                 │
│  • Phone Clicks     │     │  • Upload offline  │     │  • Reporting    │
│  • Gtag conversions │     │    conversions     │     │  • Conversions  │
└─────────────────────┘     │  • Adjust budgets  │     │  • Campaign Mgmt│
                            └──────────────────┘     └─────────────────┘
```

---

## API Services Called

| API Service | Purpose |
|---|---|
| **GoogleAdsService** | Query campaign, ad group, and keyword performance metrics (impressions, clicks, conversions, cost) |
| **ConversionUploadService** | Upload offline conversions (signed contracts) to enhance Smart Bidding |
| **CampaignService** | View and adjust campaign budgets and status |
| **AdGroupService** | Monitor ad group performance and manage bid adjustments |
| **CustomerService** | Pull account-level summary data for executive reporting |

---

## Tool Mockup

Below is a mockup of what our internal reporting dashboard will display:

---

### Signarama Vaughan — Ads Performance Dashboard

**Google Ads Account-Level Performance — February 2026**

| Metric | Value |
|---|---|
| **Impressions** | 45,230 |
| **Clicks** | 2,815 |
| **Conversions (Quote Requests)** | 187 |
| **Offline Conversions (Signed Contracts)** | 34 |
| **Cost** | $2,450 |
| **Cost per Lead** | $13.10 |
| **Cost per Contract** | $72.06 |

*Click for Campaign-Level Performance →*

---

### Campaign Breakdown

| Campaign | Clicks | Conversions | Cost | Cost/Conv |
|---|---|---|---|---|
| Channel Letters - GTA | 820 | 62 | $715 | $11.53 |
| Storefront Signs - Vaughan | 645 | 48 | $580 | $12.08 |
| Vehicle Wraps - Toronto | 510 | 31 | $445 | $14.35 |
| Pylon Signs - Ontario | 440 | 26 | $390 | $15.00 |
| General Signage - Branded | 400 | 20 | $320 | $16.00 |

---

## Summary

We are requesting Google Ads API developer access to build an internal tool that helps us monitor campaign performance, upload offline conversions, and optimize our advertising spend. The tool is for internal use only, specific to our single Google Ads account (AW-17956192139), and will not be made available to any third parties.
