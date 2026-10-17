# build_faq.ps1
$categories = @(
    @{
        id = "cat-used-car-basics"
        name = "Used Car Inspection — Basics"
        icon = "🚗"
        qas = @(
            @{
                num = 1
                q = "What is a used car inspection and why do I need it?"
                a = "A used car inspection is an independent, professional evaluation of a second-hand vehicle by a certified automotive expert before you purchase it. InspectCar's inspection covers 300+ checkpoints and helps you identify hidden accident damage, odometer fraud, mechanical failures, and electrical issues — protecting you from making a costly mistake when buying a used car in Bangalore."
            },
            @{
                num = 2
                q = "How much does a used car inspection cost in Bangalore?"
                a = "InspectCar offers two used car inspection packages: Expert-Drive at ₹2,699 (300+ checkpoints, OBD scan, digital report with AI health score) and Lux-Drive at ₹3,999 (everything in Expert-Drive plus paint thickness gauge test, engine oil analysis, and detailed category-wise breakdown). There are no hidden charges or travel fees within Bangalore."
            },
            @{
                num = 3
                q = "How long does a used car inspection take in Bangalore?"
                a = "A used car inspection by InspectCar takes 60 to 90 minutes at the seller's location. Larger vehicles like SUVs and MPVs may take up to 2 hours for a thorough inspection."
            },
            @{
                num = 4
                q = "Does InspectCar come to the seller's location?"
                a = "Yes. InspectCar operates a fully doorstep inspection service across all of Bangalore. Our certified inspector travels to wherever the vehicle is parked — seller's home, dealer showroom, used car lot, or parking area — at your scheduled time."
            },
            @{
                num = 5
                q = "Which is the best car inspection service in Bangalore?"
                a = "InspectCar is Bangalore's leading independent pre-purchase vehicle inspection service, offering 300+ point checks, OBD diagnostic scans, AI health scoring, paint gauge testing, and digital reports delivered within 2–4 hours. Unlike dealer or seller-arranged checks, InspectCar is a completely independent third-party service working exclusively on behalf of the buyer."
            },
            @{
                num = 6
                q = "Is used car inspection worth it before buying?"
                a = "Absolutely. InspectCar data shows over 40% of used cars in Bangalore have at least one significant undisclosed issue. A single missed issue like a cracked engine head, failed transmission, or flood damage can cost ₹50,000 to ₹1,50,000+ in repairs. An inspection at ₹2,699 is a small investment that protects a purchase worth lakhs."
            },
            @{
                num = 7
                q = "What is the AI health score in InspectCar's report?"
                a = "InspectCar's AI health score is a 0–100 rating calculated from all 300+ inspection checkpoints. Scores above 75 indicate a good condition vehicle, 50–75 indicates a vehicle requiring negotiation or minor repairs, and below 50 suggests significant issues. The score gives you a quick, objective summary of the vehicle's overall condition."
            },
            @{
                num = 8
                q = "How do I book a used car inspection in Bangalore?"
                a = "You can book a used car inspection on InspectCar's website by selecting your package and filling in the vehicle details and preferred time. You can also book via WhatsApp or phone call to +91 9900368006. InspectCar operates 7 days a week, 8 AM to 8 PM."
            }
        )
    },
    @{
        id = "cat-whats-covered"
        name = "What's Covered in the Inspection"
        icon = "🛠️"
        qas = @(
            @{
                num = 9
                q = "What does InspectCar's used car inspection check?"
                a = "InspectCar's 300+ point inspection covers: Exterior body panels and paint (including paint gauge test), engine and transmission performance, OBD diagnostic scan for fault codes, interior condition and all electrical systems, tyre condition and tread depth, underbody inspection for rust and leaks, suspension and steering, AC performance, and document verification including RC, insurance, and PUC."
            },
            @{
                num = 10
                q = "Does InspectCar check the engine of a used car?"
                a = "Yes. The engine check includes: visual inspection of the engine bay for leaks, oil condition check, coolant level and condition, cold start test for abnormal smoke or noise, idle RPM check, transmission fluid check, and a full OBD scan reading all engine-related fault codes and live sensor data."
            },
            @{
                num = 11
                q = "What is a paint gauge test and what does it reveal?"
                a = "A paint thickness gauge uses an electromagnetic sensor to measure the paint coat depth on each body panel in microns. Original factory paint is 90–130 microns thick. A panel that has been repainted after accident repair shows 160–300+ microns. This test reveals hidden accident history that looks perfectly normal to the naked eye — it is one of the most important tools in a used car inspection."
            },
            @{
                num = 12
                q = "Does InspectCar check tyres during inspection?"
                a = "Yes. Tyre inspection includes: tread depth measurement on all 4 tyres, check for uneven wear patterns (indicating alignment or suspension problems), sidewall damage, tyre age verification using the DOT manufacturing code (tyres over 5 years old should be replaced regardless of tread), spare tyre condition, and wheel rim condition."
            },
            @{
                num = 13
                q = "Does InspectCar inspect the underbody?"
                a = "Yes. The underbody inspection checks for: chassis rust or structural corrosion, evidence of major repairs or welding (indicating accident frame damage), fluid leaks from the engine, gearbox, or differential, exhaust system condition, suspension arm and bush condition, and any impact damage from driving over large obstacles."
            },
            @{
                num = 14
                q = "What electrical systems are tested in the inspection?"
                a = "All electrical systems are tested including: battery health (CCA testing), alternator output, all exterior lights (headlights, tail lights, indicators, DRLs, fog lights), interior lights, AC compressor and blower, all power windows, central locking, horn, reverse camera or sensors, USB ports, infotainment system, and any OBD-reported electrical fault codes."
            },
            @{
                num = 15
                q = "Does InspectCar verify documents during inspection?"
                a = "Yes. Document verification includes: checking that the RC book matches the vehicle's chassis number and engine number, verifying insurance validity, checking PUC certificate validity, checking for hypothecation endorsement (active loan), verifying the odometer reading against the service book entries, and confirming the vehicle is not under any court order or blacklisted."
            }
        )
    },
    @{
        id = "cat-specific-issues"
        name = "Specific Issues"
        icon = "⚠️"
        qas = @(
            @{
                num = 16
                q = "Can car inspection detect accident damage in a used car?"
                a = "Yes. Accident damage is detected through: paint thickness gauge readings (repainted panels), panel gap measurements (misaligned body panels after repair), OBD fault codes related to airbag or ABS systems, visual inspection of the firewall and chassis for repair welds, and underbody inspection for bent or repaired structural members."
            },
            @{
                num = 17
                q = "Can InspectCar detect odometer tampering?"
                a = "Yes. Odometer tampering is detected by cross-referencing the displayed reading with: physical wear indicators (accelerator pedal rubber, driver seat fabric, steering wheel wear), service book stamp dates and km entries, OBD ECU total odometer memory (in some vehicles), and tyre age vs claimed mileage."
            },
            @{
                num = 18
                q = "How do I know if a used car has been in a flood?"
                a = "Flood damage indicators include: musty or moldy smell inside the cabin, waterline marks visible under the seats or in the boot, corrosion on fuse box terminals and connectors, mud residue in the spare tyre well or under the carpet, sticky or seized door hinges, condensation inside headlamps, and corroded or replaced electrical connectors."
            },
            @{
                num = 19
                q = "Can car inspection find if the car has an unpaid loan?"
                a = "InspectCar verifies the RC book for hypothecation (loan) endorsement. If a lender (bank/NBFC) is listed on the RC, the vehicle has an active loan. The seller cannot legally transfer ownership without an NOC from the lender. We advise buyers to demand Form 35 (NOC) and check the Parivahan portal for this verification."
            },
            @{
                num = 20
                q = "What if the seller refuses to allow a car inspection?"
                a = "A seller refusing an independent inspection is a major red flag. Legitimate sellers with nothing to hide welcome inspections. InspectCar recommends walking away from any deal where the seller refuses to allow an independent third-party inspection."
            },
            @{
                num = 21
                q = "Can inspection reveal if a car has been modified illegally?"
                a = "Yes. Our inspectors check for modifications that may affect roadworthiness, safety, or insurance validity, including non-standard suspension, modified engine components, illegal LPG/CNG kit installations, and aftermarket electrical modifications. Such modifications can void insurance claims."
            },
            @{
                num = 22
                q = "Can InspectCar check for hidden rust on a used car?"
                a = "Yes. Rust detection includes: visual underbody inspection, checking door bottom edges (common rust point), wheel arch inner liners, boot floor, chassis rails, and floor pan. Surface rust is noted; structural rust is flagged as a serious issue."
            }
        )
    },
    @{
        id = "cat-booking-coverage"
        name = "Booking & Coverage"
        icon = "📍"
        qas = @(
            @{
                num = 23
                q = "Which areas in Bangalore does InspectCar cover?"
                a = "InspectCar covers all of Bangalore including Whitefield, Marathahalli, KR Puram, Sarjapur Road, Bellandur, Koramangala, HSR Layout, Indiranagar, MG Road, JP Nagar, Jayanagar, Banashankari, Bannerghatta Road, Electronic City, Hebbal, Yelahanka, Rajajinagar, Malleshwaram, and all surrounding localities."
            },
            @{
                num = 24
                q = "Does InspectCar operate on weekends and public holidays?"
                a = "Yes. InspectCar operates 7 days a week from 8 AM to 8 PM, including Sundays and public holidays. Most used car inspections happen on weekends when buyers are free to attend."
            },
            @{
                num = 25
                q = "Can I attend the inspection in person?"
                a = "Yes, and we encourage buyers to attend. Being present during the inspection helps you understand the inspector's findings in real time, ask questions, and see the condition of the vehicle firsthand."
            },
            @{
                num = 26
                q = "Can InspectCar inspect cars outside Bangalore?"
                a = "InspectCar primarily serves Bangalore. For outstation inspections in nearby cities like Mysore, an additional travel allowance applies. Contact us via WhatsApp at +91 9900368006 to check availability for your specific location."
            },
            @{
                num = 27
                q = "Can InspectCar inspect cars listed on OLX, Cars24, or CarDekho?"
                a = "Yes. InspectCar inspects any used car regardless of the platform — OLX, Cars24, CarDekho, Spinny, CARS24, or a private seller. Simply share the vehicle's location when booking."
            },
            @{
                num = 28
                q = "How do I get the inspection report?"
                a = "The digital inspection report is sent via WhatsApp and email within 2–4 hours of inspection completion. It includes high-resolution photos, pass/warn/fail for every checkpoint, category-wise scores, AI health score, inspector notes, and a final recommendation."
            },
            @{
                num = 29
                q = "Can I share the InspectCar report with the seller?"
                a = "Yes. The digital PDF report is fully shareable. Many buyers share it with the seller to negotiate a price reduction based on documented issues. It can also be shared with a bank for vehicle loan appraisal."
            },
            @{
                num = 30
                q = "How is InspectCar different from a free inspection offered by a dealer?"
                a = "A dealer's in-house inspection has a direct conflict of interest — their goal is to sell the car. InspectCar is a completely independent third party with no relationship to the seller or dealer. Our inspectors are paid only by the buyer and report only to the buyer. This independence is what makes InspectCar's assessment genuinely trustworthy."
            }
        )
    },
    @{
        id = "cat-new-car-pdi-basics"
        name = "New Car PDI — Basics"
        icon = "🆕"
        qas = @(
            @{
                num = 31
                q = "What is PDI (Pre-Delivery Inspection) for a new car?"
                a = "PDI is an independent inspection of a brand new car at the dealership before you take delivery. InspectCar's PDI covers 300+ checkpoints to ensure there is no transit damage, manufacturing defect, missing accessory, or documentation issue before you sign the delivery gate pass."
            },
            @{
                num = 32
                q = "Is PDI mandatory before taking delivery of a new car in India?"
                a = "PDI is not legally mandatory, but automotive experts and consumer protection advocates strongly recommend it for every new car buyer. InspectCar has found defects — including repainted panels, rat bite wiring, and wrong accessories — in over 25% of new cars inspected in Bangalore. Skipping PDI means accepting any pre-existing defect as your own problem post-delivery."
            },
            @{
                num = 33
                q = "How much does new car PDI cost in Bangalore?"
                a = "InspectCar's new car PDI (Pre-Drive package) costs ₹1,999 and covers 300+ checkpoints including paint gauge test, OBD scan, all electrical systems, documentation verification, and accessory check."
            },
            @{
                num = 34
                q = "How long does new car PDI take?"
                a = "InspectCar's new car PDI takes 45 to 75 minutes at the dealership or stockyard."
            },
            @{
                num = 35
                q = "When should I book a new car PDI?"
                a = "Book your PDI as soon as the dealer confirms a specific VIN/chassis number for your vehicle. Always book BEFORE the registration process begins. Once registered, you lose the leverage to demand defect rectification or a replacement vehicle."
            },
            @{
                num = 36
                q = "Does InspectCar do PDI at the dealership in Bangalore?"
                a = "Yes. InspectCar inspectors visit the dealership or stockyard anywhere in Bangalore. We cover all major dealer corridors including Tumkur Road, Old Madras Road, Hosur Road, Bellary Road, Mysore Road, and Outer Ring Road."
            },
            @{
                num = 37
                q = "What happens if InspectCar finds defects during new car PDI?"
                a = "InspectCar's detailed PDF report with photos gives you documented evidence. You can use this to demand the dealer rectify all issues before delivery, request a replacement vehicle from the same stock, or negotiate complimentary accessories (3D mats, dashcam, extended warranty) as compensation for minor defects."
            },
            @{
                num = 38
                q = "Can I reject a new car if PDI fails?"
                a = "Yes. Before signing the delivery gate pass and before registration, you have the right to refuse delivery or demand a defect-free replacement. InspectCar's inspection report provides the legal and moral basis for this demand."
            }
        )
    },
    @{
        id = "cat-pdi-whats-checked"
        name = "New Car PDI — What's Checked"
        icon = "📋"
        qas = @(
            @{
                num = 39
                q = "What does InspectCar check during new car PDI?"
                a = "InspectCar's 300+ point new car PDI covers: all body panels and paint (paint gauge test on every panel), all glass panes for OEM markings and chips, all electrical systems and infotainment, AC performance, OBD scan for pre-existing fault codes, all fluid levels, tyre condition and DOT code, underbody for transit damage, and complete documentation and accessory verification."
            },
            @{
                num = 40
                q = "Can a brand new car have paint defects from the factory?"
                a = "Yes. Factory paint defects include orange peel texture, paint runs, dirt inclusions, fish-eye marks, and uneven coverage. Transit handling can cause bumper or panel paint damage that dealers repair before delivery without disclosure. A paint gauge test detects all of these."
            },
            @{
                num = 41
                q = "What is stockyard damage in a new car?"
                a = "Stockyard damage occurs when cars are stored in dealer lots for weeks or months awaiting buyers. During this time, rats can chew wiring harnesses, battery voltage drops affecting ECU, UV exposure fades plastic trim, and hailstorms can cause small dents. InspectCar's PDI specifically inspects for all stockyard damage types."
            },
            @{
                num = 42
                q = "How can I tell if my new car was used as a demo car?"
                a = "Signs of a demo car include: odometer reading above 200 km, wear on driver's accelerator pedal rubber, scuffs on door sill entry plates, previous service history stamp in the service book, fuel level below full, and any interior wear not consistent with a brand new car."
            },
            @{
                num = 43
                q = "What documents should I check at new car delivery?"
                a = "Verify: Form 21 (Notice of dispatch from manufacturer), Form 22 (Roadworthiness certificate), manufacturer's invoice (check all accessories match), warranty booklet, owner's manual, insurance policy, 2 sets of keys, spare tyre with matching OEM size, wheel spanner and jack, and all accessories listed on your booking invoice."
            },
            @{
                num = 44
                q = "Does InspectCar check for rat bite wiring in new cars?"
                a = "Yes. Rat bite damage to wiring harnesses is a genuine problem in Bangalore dealership stockyards. Our PDI specifically inspects the engine bay wiring harness, underbody wiring, and runs a full electrical function test. If any electrical fault is found, we run an OBD scan to identify affected circuits."
            },
            @{
                num = 45
                q = "What is the OBD scan check in new car PDI?"
                a = "Even brand new cars can have pre-existing OBD fault codes from: factory calibration runs, transport handling, battery drain during storage, or ECU software issues. InspectCar runs a full OBD scan on every new car PDI. Any stored or pending DTCs are documented in the report so you can demand they be cleared and verified before taking delivery."
            }
        )
    },
    @{
        id = "cat-pdi-negotiation"
        name = "PDI Negotiation & Value"
        icon = "🤝"
        qas = @(
            @{
                num = 46
                q = "Can InspectCar's PDI report help me get free accessories from the dealer?"
                a = "Yes. Even minor documented defects in our PDI report — a small paint touch-up, missing accessory, or OBD code — give you formal written evidence to negotiate with the dealer. Many of our customers use PDI reports to receive complimentary 3D mats, mud flaps, dashcams, or extended warranty coverage."
            },
            @{
                num = 47
                q = "Is the price of a new car negotiable?"
                a = "New car ex-showroom prices are fixed, but on-road price components can be negotiated. Insurance premiums, extended warranty pricing, and accessories can be negotiated. InspectCar's PDI report, by documenting any defects, creates leverage to demand these value-additions at no extra cost."
            },
            @{
                num = 48
                q = "Can the InspectCar PDI report be used to demand a replacement car?"
                a = "Yes. If our PDI documents significant defects such as a repainted panel, electrical fault, or structural damage, you have clear grounds to reject the allocated vehicle and demand a defect-free replacement from the dealer's stock before registration."
            },
            @{
                num = 49
                q = "What if the dealer refuses to rectify PDI defects?"
                a = "If a dealer refuses to address documented defects, you can escalate to the manufacturer's customer care (Honda, Maruti, Hyundai, Tata, etc.), file a complaint on the National Consumer Helpline (1800-11-4000), or approach a consumer forum. InspectCar's timestamped, photographic report is strong evidence in any such dispute."
            },
            @{
                num = 50
                q = "Does InspectCar's PDI cover warranty check?"
                a = "Yes. We verify that the vehicle's warranty period starts from the correct delivery date, the warranty booklet is properly filled, and the manufacturer's warranty terms cover the detected defects. We also advise on extended warranty options."
            },
            @{
                num = 51
                q = "What is the benefit of PDI for luxury car buyers in Bangalore?"
                a = "For luxury car buyers (Mercedes, BMW, Audi, Volvo, Lexus), an independent PDI is even more important. These vehicles have complex electronics, advanced ADAS, and higher repair costs. InspectCar's Lux-Drive PDI package provides additional depth for premium segment vehicles."
            },
            @{
                num = 52
                q = "Can PDI be done for electric vehicles (EVs) in Bangalore?"
                a = "Yes. InspectCar performs PDI on electric vehicles including Tata Nexon EV, Tata Tiago EV, Hyundai Ioniq 5, MG ZS EV, and BYD Atto 3. EV PDI includes battery health assessment, charging port test, regenerative braking check, OBD scan via EV diagnostic protocols, and range display verification."
            }
        )
    },
    @{
        id = "cat-report-after-inspection"
        name = "Report & After-Inspection"
        icon = "📄"
        qas = @(
            @{
                num = 53
                q = "What does InspectCar's inspection report contain?"
                a = "The report contains: AI health score (0–100), pass/warn/fail status for all 300+ checkpoints, category-wise scores (Exterior, Interior, Engine, Electricals, Tyres, Underbody, Documents), high-resolution photos of all noted issues, inspector notes, negotiation tips for identified defects, and a final recommendation (Buy / Negotiate / Avoid for used cars, or Approved / Rectify for new car PDI)."
            },
            @{
                num = 54
                q = "How soon do I get the inspection report?"
                a = "InspectCar delivers the digital report via WhatsApp and email within 2–4 hours of inspection completion. For same-day reports, book morning slots."
            },
            @{
                num = 55
                q = "Is the report digital or physical?"
                a = "The report is delivered digitally as a PDF via WhatsApp and email. It is fully shareable, printable, and suitable for presenting to sellers, dealers, banks, or consumer forums."
            },
            @{
                num = 56
                q = "Can I negotiate the used car price based on InspectCar's report?"
                a = "Yes, and this is one of the most practical uses of the inspection report. If our report documents issues such as worn tyres, service history gaps, or OBD fault codes, you can calculate the cost of repairs and deduct a proportionate amount from the asking price. Many InspectCar customers save ₹20,000–₹1,00,000+ in price negotiations using our report."
            },
            @{
                num = 57
                q = "Does InspectCar offer any re-inspection if I want a second opinion?"
                a = "Yes. InspectCar can perform a re-inspection of the same vehicle after the seller addresses issues. Contact us to book a follow-up inspection at a discounted rate."
            },
            @{
                num = 58
                q = "Can I use InspectCar's report for car insurance?"
                a = "Some insurance providers accept third-party inspection reports for insurance policy purposes. The InspectCar report's documented vehicle condition and photos can support insurance claims if a defect existed at purchase that caused a later issue."
            },
            @{
                num = 59
                q = "Is InspectCar's report accepted by banks for car loans?"
                a = "InspectCar's report is a professional assessment that many banks and NBFCs view favorably when evaluating a used vehicle for loan purposes. It demonstrates due diligence by the buyer. However, formal bank valuation is a separate process — some banks have their own empaneled inspectors."
            },
            @{
                num = 60
                q = "How do I contact InspectCar to book an inspection?"
                a = "You can reach InspectCar through: WhatsApp: +91 9900368006, Phone: +91 9900368006, Email: info@inspectcar.in, or book directly on the website at https://inspectcar.in/#packages. We are available 7 days a week, 8 AM to 8 PM."
            }
        )
    }
)

Write-Host "Total categories: $($categories.Count)"
$totalQuestions = ($categories | ForEach-Object { $_.qas.Count } | Measure-Object -Sum).Sum
Write-Host "Total questions: $totalQuestions"

# Build Schema JSON
$schemaQuestions = @()
foreach ($cat in $categories) {
    foreach ($item in $cat.qas) {
        $schemaQuestions += @{
            "@type" = "Question"
            "name" = $item.q
            "acceptedAnswer" = @{
                "@type" = "Answer"
                "text" = $item.a
            }
        }
    }
}

$schemaObj = @{
    "@context" = "https://schema.org"
    "@type" = "FAQPage"
    "mainEntity" = $schemaQuestions
}

$schemaJson = $schemaObj | ConvertTo-Json -Depth 10

# Build Accordion HTML
$accordionHtml = ""
foreach ($cat in $categories) {
    $catHtml = @"
    <!-- $($cat.name) ($($cat.qas.Count) Q&As) -->
    <section class="faq-category-card" id="$($cat.id)" data-category="$($cat.id)">
      <div class="faq-category-header">
        <div class="faq-category-title-wrap">
          <span class="faq-cat-icon">$($cat.icon)</span>
          <h2>$($cat.name)</h2>
        </div>
        <span class="faq-cat-count">$($cat.qas.Count) Questions</span>
      </div>
      <div class="faq-items-list">
"@

    foreach ($qa in $cat.qas) {
        $catHtml += @"

        <div class="faq-accordion-item" data-question-num="$($qa.num)">
          <button class="faq-question-btn" type="button" aria-expanded="false" id="faq-btn-$($qa.num)" aria-controls="faq-ans-$($qa.num)">
            <span class="faq-q-text"><span class="faq-q-number">Q$($qa.num).</span> $($qa.q)</span>
            <span class="faq-icon-indicator" aria-hidden="true"><i class="fas fa-chevron-down"></i></span>
          </button>
          <div class="faq-answer-panel" id="faq-ans-$($qa.num)" role="region" aria-labelledby="faq-btn-$($qa.num)">
            <div class="faq-answer-content">
              <p>$($qa.a)</p>
            </div>
          </div>
        </div>
"@
    }

    $catHtml += @"

      </div>
    </section>
"@
    $accordionHtml += $catHtml
}

# Now assemble full HTML with exact styling
$fullHtml = @"
<!DOCTYPE html>
<html lang="en">
<head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YQ9SQPDMTF"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YQ9SQPDMTF');
</script>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Car Inspection FAQ Bangalore | Used Car &amp; New Car PDI Questions | InspectCar</title>
<meta name="description" content="60+ answers to your used car inspection and new car PDI questions in Bangalore. Costs, process, coverage, what's checked, how to book — all answered by InspectCar experts.">
<meta name="keywords" content="car inspection FAQ Bangalore, used car inspection questions Bangalore, new car PDI FAQ Bangalore, car inspection cost Bangalore, doorstep car inspection Bangalore, paint gauge test Bangalore, PDI checklist Bangalore">
<link rel="canonical" href="https://inspectcar.in/faq.html">

<!-- Favicon & Icons -->
<link rel="icon" type="image/jpeg" sizes="192x192" href="/images/favicon-logo.jpg">
<link rel="icon" type="image/jpeg" sizes="96x96" href="/images/favicon-logo.jpg">
<link rel="icon" type="image/jpeg" sizes="48x48" href="/images/favicon-logo.jpg">
<link rel="apple-touch-icon" sizes="180x180" href="/images/favicon-logo.jpg">
<link rel="shortcut icon" href="/images/favicon-logo.jpg">
<meta name="theme-color" content="#6366F1">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://inspectcar.in/faq.html">
<meta property="og:title" content="Car Inspection FAQ Bangalore | Used Car &amp; New Car PDI Questions | InspectCar">
<meta property="og:description" content="60+ answers to your used car inspection and new car PDI questions in Bangalore. Costs, process, coverage, what's checked, how to book — all answered by InspectCar experts.">
<meta property="og:image" content="https://inspectcar.in/images/Logo.webp">
<meta property="og:site_name" content="InspectCar">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@InspectCar">
<meta name="twitter:title" content="Car Inspection FAQ Bangalore | InspectCar">
<meta name="twitter:description" content="60 comprehensive answers for used car inspection and new car PDI in Bangalore. 300+ checkpoints, pricing, paint gauge, OBD scan, and buyer rights.">
<meta name="twitter:image" content="https://inspectcar.in/images/Logo.webp">

<!-- Fonts & Icons -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">

<!-- BreadcrumbList Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://inspectcar.in/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Car Inspection FAQ Bangalore",
      "item": "https://inspectcar.in/faq.html"
    }
  ]
}
</script>

<!-- LocalBusiness Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "InspectCar Bangalore",
  "image": "https://inspectcar.in/images/Logo.webp",
  "telephone": "+919900368006",
  "email": "info@inspectcar.in",
  "url": "https://inspectcar.in/",
  "priceRange": "₹1,999 - ₹3,999",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "postalCode": "560001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.9716,
    "longitude": 77.5946
  },
  "areaServed": {
    "@type": "City",
    "name": "Bangalore"
  },
  "openingHours": "Mo-Su 08:00-20:00"
}
</script>

<!-- MASSIVE FAQ Schema with ALL 60 Questions and Answers -->
<script type="application/ld+json">
$schemaJson
</script>

<style>
/* Page Variables and FAQ Specific Overrides */
:root {
  --bg-page: #0E0E1C;
  --bg-card: #161625;
  --bg-card-hover: #1C1C30;
  --bg-item: #131322;
  --bg-item-hover: #1A1A2E;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-color: rgba(99, 102, 241, 0.22);
  --border-active: rgba(139, 92, 246, 0.55);
  --accent-primary: #6366F1;
  --accent-mid: #8B5CF6;
  --accent-light: #A78BFA;
  --accent-glow: rgba(99, 102, 241, 0.35);
  --text-main: #F4F4F6;
  --text-muted: #9CA3AF;
  --text-dim: #6B7280;
  --success: #10B981;
}

body {
  background-color: var(--bg-page);
  color: var(--text-main);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Background Ambient Glows */
.faq-ambient-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}
.ambient-circle-1 {
  position: absolute;
  top: -150px;
  right: -100px;
  width: 650px;
  height: 650px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
  filter: blur(80px);
}
.ambient-circle-2 {
  position: absolute;
  top: 40%;
  left: -150px;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%);
  filter: blur(80px);
}
.ambient-circle-3 {
  position: absolute;
  bottom: 5%;
  right: -50px;
  width: 550px;
  height: 550px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(167, 139, 250, 0.10) 0%, transparent 70%);
  filter: blur(80px);
}

/* Header & Navbar */
header {
  position: fixed;
  top: 16px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1000;
}
.navbar {
  width: min(1200px, 94%);
  height: 72px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(18, 18, 26, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border-subtle);
  border-radius: 20px;
  transition: all 0.35s ease;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.45);
}
.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.logo img {
  height: 36px;
  width: auto;
  filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.4));
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-links a {
  text-decoration: none;
  color: var(--text-muted);
  font-size: 14.5px;
  font-weight: 600;
  transition: color 0.25s ease;
  position: relative;
}
.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-mid));
  border-radius: 50px;
  transition: width 0.3s ease;
}
.nav-links a:hover, .nav-links a.active {
  color: #fff;
}
.nav-links a:hover::after, .nav-links a.active::after {
  width: 100%;
}
.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
.nav-circle {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 16px;
  transition: transform 0.2s, background 0.2s;
}
.call-circle {
  background: rgba(99, 102, 241, 0.18);
  color: #C4B5FD;
  border: 1px solid rgba(99, 102, 241, 0.35);
}
.call-circle:hover {
  transform: translateY(-2px);
  background: rgba(99, 102, 241, 0.32);
  color: #fff;
}
.whatsapp-circle {
  background: #25D366;
  color: #fff;
}
.whatsapp-circle:hover {
  transform: translateY(-2px);
  background: #1EBE5B;
}

/* Mobile Nav Toggle */
.menu-toggle {
  display: none;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  cursor: pointer;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  z-index: 1001;
}
.menu-toggle span {
  width: 20px;
  height: 2px;
  background: var(--accent-light);
  border-radius: 10px;
  transition: 0.3s ease;
}
.menu-toggle.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.menu-toggle.active span:nth-child(2) { opacity: 0; }
.menu-toggle.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Breadcrumb */
.breadcrumb-bar {
  max-width: 1100px;
  margin: 110px auto 0;
  padding: 0 20px;
  font-size: 13.5px;
  color: var(--text-dim);
  display: flex;
  align-items: center;
  gap: 8px;
}
.breadcrumb-bar a {
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s;
}
.breadcrumb-bar a:hover {
  color: var(--accent-light);
}
.breadcrumb-bar .sep {
  opacity: 0.4;
}
.breadcrumb-bar .current {
  color: var(--accent-light);
  font-weight: 600;
}

/* Hero Section */
.faq-hero {
  max-width: 1100px;
  margin: 0 auto;
  padding: 35px 20px 45px;
  text-align: center;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(99, 102, 241, 0.14);
  border: 1px solid rgba(139, 92, 246, 0.32);
  padding: 7px 18px;
  border-radius: 50px;
  font-size: 13.5px;
  font-weight: 600;
  color: #C4B5FD;
  margin-bottom: 22px;
}
.faq-hero h1 {
  font-size: clamp(30px, 4.8vw, 52px);
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.2;
  margin: 0 0 16px;
  letter-spacing: -0.02em;
}
.faq-hero h1 span {
  background: linear-gradient(135deg, #FFFFFF 20%, #C4B5FD 70%, #A78BFA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-subheading {
  font-size: clamp(17px, 2.2vw, 21px);
  color: #E2E8F0;
  font-weight: 500;
  max-width: 860px;
  margin: 0 auto 20px;
  line-height: 1.5;
}
.hero-intro {
  font-size: 15.5px;
  color: var(--text-muted);
  max-width: 900px;
  margin: 0 auto 32px;
  line-height: 1.75;
}
.hero-intro strong {
  color: #FFFFFF;
  font-weight: 600;
}

/* Hero CTA Buttons */
.hero-cta-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}
.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #6366F1, #8B5CF6);
  color: #FFFFFF;
  padding: 15px 32px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 15.5px;
  text-decoration: none;
  box-shadow: 0 10px 28px -5px rgba(99, 102, 241, 0.45);
  transition: transform 0.2s, box-shadow 0.2s;
}
.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 34px -5px rgba(99, 102, 241, 0.6);
  color: #fff;
}
.cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(22, 22, 37, 0.9);
  color: #F4F4F6;
  border: 1px solid rgba(139, 92, 246, 0.35);
  padding: 15px 30px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 15.5px;
  text-decoration: none;
  transition: all 0.2s ease;
}
.cta-secondary:hover {
  background: rgba(99, 102, 241, 0.15);
  border-color: #A78BFA;
  transform: translateY(-2px);
  color: #fff;
}
.cta-whatsapp-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #25D366;
  font-weight: 600;
  font-size: 14.5px;
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 50px;
  background: rgba(37, 211, 102, 0.1);
  border: 1px solid rgba(37, 211, 102, 0.25);
  transition: all 0.2s ease;
}
.cta-whatsapp-link:hover {
  background: rgba(37, 211, 102, 0.2);
  transform: translateY(-2px);
}

/* Quick Stats Bar */
.faq-stats-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  max-width: 960px;
  margin: 0 auto;
}
.faq-stat-pill {
  background: rgba(22, 22, 37, 0.7);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;
}
.faq-stat-icon {
  font-size: 22px;
  color: var(--accent-light);
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(99, 102, 241, 0.14);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.faq-stat-info .stat-val {
  font-size: 18px;
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
}
.faq-stat-info .stat-lbl {
  font-size: 12px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 3px;
}

/* Interactive Controls: Search & Category Filter */
.faq-controls-container {
  max-width: 1100px;
  margin: 40px auto 30px;
  padding: 0 20px;
}

.faq-search-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
}

.search-input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}
.search-input-wrap i.search-icon {
  position: absolute;
  left: 20px;
  color: var(--accent-light);
  font-size: 18px;
  pointer-events: none;
}
.faq-search-input {
  width: 100%;
  padding: 16px 50px 16px 52px;
  background: rgba(14, 14, 28, 0.85);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 12px;
  color: #FFFFFF;
  font-size: 15.5px;
  font-family: inherit;
  transition: all 0.25s ease;
  box-sizing: border-box;
}
.faq-search-input:focus {
  outline: none;
  border-color: var(--accent-mid);
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.25);
  background: rgba(14, 14, 28, 1);
}
.faq-search-input::placeholder {
  color: var(--text-dim);
}
.search-clear-btn {
  position: absolute;
  right: 18px;
  background: none;
  border: none;
  color: var(--text-dim);
  font-size: 16px;
  cursor: pointer;
  display: none;
  padding: 4px;
  transition: color 0.2s;
}
.search-clear-btn:hover {
  color: #fff;
}

/* Controls Header with Count and Accordion Actions */
.controls-meta-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid var(--border-subtle);
  flex-wrap: wrap;
  gap: 12px;
}
.search-results-count {
  font-size: 14px;
  color: var(--text-muted);
}
.search-results-count strong {
  color: var(--accent-light);
}
.accordion-toggle-actions {
  display: flex;
  gap: 10px;
}
.btn-toggle-all {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.btn-toggle-all:hover {
  background: rgba(99, 102, 241, 0.15);
  color: #fff;
  border-color: rgba(99, 102, 241, 0.4);
}

/* Category Filter Tabs / Pills */
.category-filter-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}
.cat-pill {
  background: rgba(14, 14, 28, 0.7);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 13.5px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  text-decoration: none;
}
.cat-pill:hover {
  background: rgba(99, 102, 241, 0.14);
  color: #fff;
  border-color: rgba(99, 102, 241, 0.35);
}
.cat-pill.active {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3));
  border-color: var(--accent-light);
  color: #FFFFFF;
  font-weight: 600;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.2);
}
.cat-pill .pill-badge {
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 7px;
  border-radius: 12px;
  font-size: 11px;
  color: #C4B5FD;
}

/* Main FAQ Container */
.faq-main-content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 10px 20px 60px;
}

/* Category Card Section */
.faq-category-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 18px;
  padding: 32px 30px;
  margin-bottom: 36px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
  transition: border-color 0.25s ease;
  scroll-margin-top: 100px;
}
.faq-category-card:hover {
  border-color: rgba(139, 92, 246, 0.4);
}

.faq-category-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--border-subtle);
  flex-wrap: wrap;
  gap: 12px;
}
.faq-category-title-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}
.faq-cat-icon {
  font-size: 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(99, 102, 241, 0.14);
  border: 1px solid rgba(99, 102, 241, 0.25);
}
.faq-category-header h2 {
  font-size: clamp(20px, 2.5vw, 24px);
  font-weight: 700;
  color: #A78BFA; /* Required color #A78BFA */
  margin: 0;
  letter-spacing: -0.01em;
}
.faq-cat-count {
  font-size: 12.5px;
  font-weight: 600;
  color: #C4B5FD;
  background: rgba(167, 139, 250, 0.12);
  border: 1px solid rgba(167, 139, 250, 0.28);
  padding: 5px 14px;
  border-radius: 30px;
}

/* Accordion Item Styling */
.faq-items-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.faq-accordion-item {
  background: var(--bg-item);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.25s ease;
}
.faq-accordion-item:hover {
  background: var(--bg-item-hover);
  border-color: rgba(139, 92, 246, 0.3);
}
.faq-accordion-item.active {
  background: rgba(22, 22, 40, 0.95);
  border-color: var(--border-active);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.12);
}

.faq-question-btn {
  width: 100%;
  padding: 18px 22px;
  background: none;
  border: none;
  color: var(--text-main);
  text-align: left;
  font-size: 15.5px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  transition: color 0.2s ease;
}
.faq-question-btn:hover {
  color: #FFFFFF;
}
.faq-accordion-item.active .faq-question-btn {
  color: #FFFFFF;
}

.faq-q-text {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  line-height: 1.45;
}
.faq-q-number {
  color: var(--accent-light);
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
  padding-top: 1px;
}

.faq-icon-indicator {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--accent-light);
  font-size: 12px;
  transition: transform 0.3s ease, background 0.2s ease;
}
.faq-question-btn:hover .faq-icon-indicator {
  background: rgba(99, 102, 241, 0.2);
  color: #fff;
}
.faq-accordion-item.active .faq-icon-indicator {
  transform: rotate(180deg);
  background: linear-gradient(135deg, #6366F1, #8B5CF6);
  color: #fff;
  border-color: transparent;
}

/* Answer Panel */
.faq-answer-panel {
  display: none;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  animation: fadeIn 0.25s ease forwards;
}
.faq-accordion-item.active .faq-answer-panel {
  display: block;
}

.faq-answer-content {
  padding: 18px 22px 22px;
}
.faq-answer-content p {
  margin: 0;
  color: #D1D5DB;
  font-size: 14.5px;
  line-height: 1.75;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Highlight search match */
mark.faq-highlight {
  background: rgba(245, 158, 11, 0.35);
  color: #FDE68A;
  padding: 1px 4px;
  border-radius: 4px;
}

/* No results state */
.faq-no-results {
  display: none;
  text-align: center;
  padding: 60px 20px;
  background: var(--bg-card);
  border: 1px dashed var(--border-color);
  border-radius: 18px;
  margin: 20px 0;
}
.faq-no-results.visible {
  display: block;
}
.faq-no-results i {
  font-size: 42px;
  color: var(--accent-light);
  margin-bottom: 16px;
  opacity: 0.8;
}
.faq-no-results h3 {
  font-size: 20px;
  color: #fff;
  margin-bottom: 8px;
}
.faq-no-results p {
  color: var(--text-muted);
  font-size: 14.5px;
  max-width: 480px;
  margin: 0 auto 20px;
}

/* Bottom CTA Banner */
.faq-bottom-cta {
  max-width: 1100px;
  margin: 30px auto 60px;
  padding: 0 20px;
}
.cta-banner-inner {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.18), rgba(139, 92, 246, 0.12));
  border: 1px solid rgba(139, 92, 246, 0.35);
  border-radius: 24px;
  padding: 50px 36px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.35);
}
.cta-banner-inner::before {
  content: "";
  position: absolute;
  top: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%);
  pointer-events: none;
}
.cta-banner-inner h2 {
  font-size: clamp(24px, 3.5vw, 34px);
  font-weight: 800;
  color: #FFFFFF;
  margin: 0 0 14px;
}
.cta-banner-inner p {
  color: #D1D5DB;
  font-size: 16px;
  max-width: 680px;
  margin: 0 auto 30px;
  line-height: 1.7;
}
.cta-banner-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

/* Footer (Matching index.html & new-car-pdi.html) */
.footer {
  background: #0A0A14;
  border-top: 1px solid var(--border-subtle);
  padding: 70px 0 0;
  margin-top: 80px;
}
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
}
.footer-brand .logo-box img {
  height: 36px;
  margin-bottom: 16px;
}
.footer-brand p {
  color: #6B7280;
  font-size: 14px;
  line-height: 1.7;
  margin: 0 0 20px;
  max-width: 320px;
}
.social-icons {
  display: flex;
  gap: 10px;
}
.social-icons a {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  font-size: 14px;
  text-decoration: none;
  transition: all 0.2s ease;
}
.social-icons a:hover {
  background: rgba(99, 102, 241, 0.25);
  color: var(--accent-light);
  transform: translateY(-2px);
}
.footer-column h3 {
  font-size: 16px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 20px;
}
.footer-column a, .footer-column span {
  display: block;
  color: #9CA3AF;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 12px;
  transition: color 0.2s ease;
}
.footer-column a:hover {
  color: #FFFFFF;
}
.footer-bottom {
  max-width: 1200px;
  margin: 50px auto 0;
  padding: 24px;
  border-top: 1px solid var(--border-subtle);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  color: var(--text-dim);
  font-size: 13.5px;
}
.footer-bottom a {
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-bottom a:hover {
  color: #fff;
}

/* Responsive Media Queries */
@media (max-width: 900px) {
  .faq-stats-bar {
    grid-template-columns: repeat(2, 1fr);
  }
  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .navbar {
    width: 95%;
    padding: 0 16px;
    height: 60px;
  }
  .nav-actions {
    display: none;
  }
  .menu-toggle {
    display: flex;
  }
  .nav-links {
    position: fixed;
    top: 76px;
    right: 3%;
    width: min(280px, 85vw);
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 12px 0;
    max-height: 0;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    background: #131322;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 18px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.85);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
  }
  .nav-links.active {
    max-height: 80vh;
    opacity: 1;
    visibility: visible;
  }
  .nav-links li {
    width: 100%;
  }
  .nav-links a {
    display: block;
    width: 100%;
    padding: 12px 24px;
    color: #F4F4F6;
    font-size: 15px;
  }
  .nav-links a::after {
    display: none;
  }
  .breadcrumb-bar {
    margin-top: 90px;
  }
  .faq-category-card {
    padding: 24px 18px;
  }
  .faq-question-btn {
    padding: 16px 16px;
    font-size: 14.5px;
  }
  .faq-answer-content {
    padding: 14px 16px 18px;
  }
  .cta-banner-inner {
    padding: 36px 20px;
  }
  .footer-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
}

@media (max-width: 500px) {
  .faq-stats-bar {
    grid-template-columns: 1fr;
  }
  .hero-cta-group {
    flex-direction: column;
    width: 100%;
  }
  .cta-primary, .cta-secondary, .cta-whatsapp-link {
    width: 100%;
    justify-content: center;
  }
  .controls-meta-bar {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
</head>

<body>

<!-- Ambient Glow Elements -->
<div class="faq-ambient-bg" aria-hidden="true">
  <div class="ambient-circle-1"></div>
  <div class="ambient-circle-2"></div>
  <div class="ambient-circle-3"></div>
</div>

<!-- Header / Fixed Navigation -->
<header>
  <nav class="navbar" aria-label="Main Navigation">
    <a href="index.html" class="logo" aria-label="InspectCar Home">
      <img src="images/Logo.webp" alt="InspectCar Logo">
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="index.html#services">Services</a></li>
      <li><a href="index.html#packages">Packages</a></li>
      <li><a href="index.html#whyus">Why Us</a></li>
      <li><a href="blogs.html">Blog</a></li>
      <li><a href="faq.html" class="active">FAQ</a></li>
      <li><a href="index.html#contact">Contact</a></li>
    </ul>
    <div class="nav-actions">
      <a href="tel:+919900368006" class="nav-circle call-circle" aria-label="Call InspectCar">
        <i class="fas fa-phone"></i>
      </a>
      <a href="https://wa.me/919900368006?text=Hi%20InspectCar,%20I%20have%20a%20question%20about%20Car%20Inspection%20in%20Bangalore" target="_blank" class="nav-circle whatsapp-circle" aria-label="WhatsApp InspectCar">
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
    <button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation menu" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
</header>

<!-- Breadcrumb Navigation -->
<nav class="breadcrumb-bar" aria-label="Breadcrumb">
  <a href="index.html">Home</a>
  <span class="sep">/</span>
  <a href="index.html#services">Services</a>
  <span class="sep">/</span>
  <span class="current">Car Inspection FAQ Bangalore</span>
</nav>

<!-- Hero Section with target keyword in first 100 words -->
<section class="faq-hero">
  <div class="hero-badge">
    <i class="fas fa-shield-halved"></i> 100% Independent Automotive Advisory &bull; Bangalore
  </div>
  
  <h1>Everything You Need to Know About <span>Car Inspection in Bangalore</span></h1>
  
  <p class="hero-subheading">
    60 answers from InspectCar experts — used car inspection, new car PDI, pricing, process, and everything in between.
  </p>
  
  <p class="hero-intro">
    Welcome to <strong>InspectCar</strong>, your trusted independent authority for second-hand pre-purchase vehicle inspection and new car PDI across <strong>Bangalore</strong>. Whether you are finalizing an agreement on a pre-owned car or inspecting a factory-fresh delivery at a Bangalore dealership stockyard, our certified automotive specialists guide you with data-backed transparency. Below, our engineers address all 60 of the most critical questions covering inspection pricing from ₹1,999 to ₹3,999, 300+ checkpoint scope, paint gauge testing, computer OBD diagnostic scans, and defect negotiation rights.
  </p>

  <div class="hero-cta-group">
    <a href="https://inspectcar.in/#packages" class="cta-primary">
      <i class="fas fa-car-side"></i> Book Used Car Inspection
    </a>
    <a href="new-car-pdi.html" class="cta-secondary">
      <i class="fas fa-certificate"></i> Book New Car PDI
    </a>
    <a href="https://wa.me/919900368006?text=Hi%20InspectCar,%20I%20have%20a%20query%20about%20vehicle%20inspection%20in%20Bangalore" target="_blank" class="cta-whatsapp-link">
      <i class="fab fa-whatsapp"></i> Chat with Expert
    </a>
  </div>

  <div class="faq-stats-bar">
    <div class="faq-stat-pill">
      <div class="faq-stat-icon"><i class="fas fa-list-check"></i></div>
      <div class="faq-stat-info">
        <div class="stat-val">60</div>
        <div class="stat-lbl">Expert Answers</div>
      </div>
    </div>
    <div class="faq-stat-pill">
      <div class="faq-stat-icon"><i class="fas fa-layer-group"></i></div>
      <div class="faq-stat-info">
        <div class="stat-val">8</div>
        <div class="stat-lbl">Core Categories</div>
      </div>
    </div>
    <div class="faq-stat-pill">
      <div class="faq-stat-icon"><i class="fas fa-microchip"></i></div>
      <div class="faq-stat-info">
        <div class="stat-val">300+</div>
        <div class="stat-lbl">Checkpoints Tested</div>
      </div>
    </div>
    <div class="faq-stat-pill">
      <div class="faq-stat-icon"><i class="fas fa-location-dot"></i></div>
      <div class="faq-stat-info">
        <div class="stat-val">100%</div>
        <div class="stat-lbl">Bangalore Coverage</div>
      </div>
    </div>
  </div>
</section>

<!-- Interactive Search & Filter Controls -->
<section class="faq-controls-container" aria-label="FAQ Filters">
  <div class="faq-search-card">
    <div class="search-input-wrap">
      <i class="fas fa-search search-icon" aria-hidden="true"></i>
      <input 
        type="search" 
        id="faqSearchInput" 
        class="faq-search-input" 
        placeholder="Search 60 questions (e.g. paint gauge, PDI cost, flood damage, rat bite, loan NOC, EV)..."
        aria-label="Search all FAQ questions and answers"
      >
      <button type="button" id="searchClearBtn" class="search-clear-btn" aria-label="Clear search">
        <i class="fas fa-xmark"></i>
      </button>
    </div>

    <!-- Category Filter Pills -->
    <div class="category-filter-pills" role="tablist" aria-label="Filter questions by category">
      <button class="cat-pill active" data-filter="all" role="tab" aria-selected="true">
        <span>✨ All Questions</span>
        <span class="pill-badge">60</span>
      </button>
      <button class="cat-pill" data-filter="cat-used-car-basics" role="tab" aria-selected="false">
        <span>🚗 Used Car Basics</span>
        <span class="pill-badge">8</span>
      </button>
      <button class="cat-pill" data-filter="cat-whats-covered" role="tab" aria-selected="false">
        <span>🛠️ What's Covered</span>
        <span class="pill-badge">7</span>
      </button>
      <button class="cat-pill" data-filter="cat-specific-issues" role="tab" aria-selected="false">
        <span>⚠️ Specific Issues</span>
        <span class="pill-badge">7</span>
      </button>
      <button class="cat-pill" data-filter="cat-booking-coverage" role="tab" aria-selected="false">
        <span>📍 Booking &amp; Coverage</span>
        <span class="pill-badge">8</span>
      </button>
      <button class="cat-pill" data-filter="cat-new-car-pdi-basics" role="tab" aria-selected="false">
        <span>🆕 New Car PDI Basics</span>
        <span class="pill-badge">8</span>
      </button>
      <button class="cat-pill" data-filter="cat-pdi-whats-checked" role="tab" aria-selected="false">
        <span>📋 PDI Checkpoints</span>
        <span class="pill-badge">7</span>
      </button>
      <button class="cat-pill" data-filter="cat-pdi-negotiation" role="tab" aria-selected="false">
        <span>🤝 Negotiation &amp; Rights</span>
        <span class="pill-badge">7</span>
      </button>
      <button class="cat-pill" data-filter="cat-report-after-inspection" role="tab" aria-selected="false">
        <span>📄 Report &amp; Post-Check</span>
        <span class="pill-badge">8</span>
      </button>
    </div>

    <div class="controls-meta-bar">
      <div class="search-results-count" id="searchResultsCount">
        Showing <strong>60</strong> of 60 answers
      </div>
      <div class="accordion-toggle-actions">
        <button type="button" class="btn-toggle-all" id="btnExpandAll">
          <i class="fas fa-angles-down"></i> Expand All
        </button>
        <button type="button" class="btn-toggle-all" id="btnCollapseAll">
          <i class="fas fa-angles-up"></i> Collapse All
        </button>
      </div>
    </div>
  </div>
</section>

<!-- Main FAQ Content Sections -->
<main class="faq-main-content" id="faqAccordionContainer">

$accordionHtml

  <!-- No Results Found State -->
  <div class="faq-no-results" id="faqNoResults">
    <i class="fas fa-magnifying-glass"></i>
    <h3>No matching answers found</h3>
    <p>We couldn't find any questions matching your query. Try searching for broader terms like "engine", "PDI", "report", or "Bangalore".</p>
    <button type="button" class="cta-secondary" id="btnResetSearch">
      <i class="fas fa-rotate-left"></i> Reset Filter
    </button>
  </div>

</main>

<!-- Bottom CTA Section -->
<section class="faq-bottom-cta">
  <div class="cta-banner-inner">
    <h2>Still Have Questions About Your Vehicle in Bangalore?</h2>
    <p>
      Whether you need an urgent doorstep pre-purchase inspection today or want to coordinate a PDI slot for your upcoming car delivery, InspectCar's certified engineers are ready to assist you 7 days a week.
    </p>
    <div class="cta-banner-buttons">
      <a href="https://inspectcar.in/#packages" class="cta-primary">
        <i class="fas fa-calendar-check"></i> Book Vehicle Inspection
      </a>
      <a href="https://wa.me/919900368006?text=Hi%20InspectCar,%20I%20have%20a%20question%20about%20booking%20an%20inspection%20in%20Bangalore" target="_blank" class="cta-secondary" style="color: #25D366; border-color: rgba(37, 211, 102, 0.4);">
        <i class="fab fa-whatsapp"></i> WhatsApp +91 9900368006
      </a>
      <a href="tel:+919900368006" class="cta-secondary">
        <i class="fas fa-phone"></i> Call +91 9900368006
      </a>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="footer">
  <div class="footer-container">
    <div class="footer-brand">
      <div class="logo-box">
        <img src="images/Logo.webp" alt="InspectCar Logo" style="height: 36px;">
      </div>
      <p>
        AI-powered vehicle inspections helping buyers make confident decisions with transparent reports, certified experts, and advanced diagnostics across Bangalore.
      </p>
      <div class="social-icons">
        <a href="https://www.facebook.com/InspectCar.in/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/inspectcar_in" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://x.com/InspectCar" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
        <a href="https://wa.me/919900368006" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
        <a href="https://www.linkedin.com/company/inspectcar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
    
    <div class="footer-column">
      <h3>Company</h3>
      <a href="index.html">Home</a>
      <a href="index.html#services">Services</a>
      <a href="index.html#packages">Packages</a>
      <a href="blogs.html">Blog &amp; Buyer Guides</a>
      <a href="faq.html">Master FAQ</a>
      <a href="index.html#whyus">Why Choose Us</a>
      <a href="index.html#contact">Contact</a>
    </div>

    <div class="footer-column">
      <h3>Services</h3>
      <a href="used-car-inspection.html">Used Car Inspection</a>
      <a href="new-car-pdi.html">New Car PDI</a>
      <a href="pre-purchase-inspection.html">Pre-Purchase Inspection</a>
      <a href="odometer-check.html">Odometer Check</a>
      <a href="vin-check.html">VIN Verification</a>
      <a href="car-inspection-cost.html">Inspection Cost Guide</a>
      <a href="car-inspection-report.html">Sample Report</a>
    </div>

    <div class="footer-column">
      <h3>Contact</h3>
      <span><i class="fas fa-phone" style="color: var(--accent-light); margin-right: 8px;"></i> +91 9900368006</span>
      <span><i class="fas fa-envelope" style="color: var(--accent-light); margin-right: 8px;"></i> info@inspectcar.in</span>
      <span><i class="fas fa-location-dot" style="color: var(--accent-light); margin-right: 8px;"></i> Bangalore, Karnataka</span>
      <span style="font-size: 13px; color: var(--text-dim); margin-top: 6px;">7 Days a Week: 8:00 AM – 8:00 PM</span>
    </div>
  </div>

  <div class="footer-bottom">
    <div>
      &copy; 2026 <strong>InspectCar</strong>. All Rights Reserved.
    </div>
    <div>
      Designed with <i class="fas fa-heart" style="color: #ef4444; font-size: 11px;"></i> for car buyers in Bangalore
    </div>
  </div>
</footer>

<!-- Interactive Accordion, Live Search & Filter Script -->
<script>
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const active = navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active', active);
      menuToggle.setAttribute('aria-expanded', active ? 'true' : 'false');
    });
  }

  // Accordion Item Click Logic
  const accordionItems = Array.from(document.querySelectorAll('.faq-accordion-item'));
  accordionItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isCurrentlyActive = item.classList.contains('active');
      if (isCurrentlyActive) {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });

  // Expand / Collapse All
  const btnExpandAll = document.getElementById('btnExpandAll');
  const btnCollapseAll = document.getElementById('btnCollapseAll');

  if (btnExpandAll) {
    btnExpandAll.addEventListener('click', () => {
      const visibleItems = accordionItems.filter(item => {
        const catCard = item.closest('.faq-category-card');
        return catCard && catCard.style.display !== 'none' && item.style.display !== 'none';
      });
      visibleItems.forEach(item => {
        item.classList.add('active');
        const btn = item.querySelector('.faq-question-btn');
        if (btn) btn.setAttribute('aria-expanded', 'true');
      });
    });
  }

  if (btnCollapseAll) {
    btnCollapseAll.addEventListener('click', () => {
      accordionItems.forEach(item => {
        item.classList.remove('active');
        const btn = item.querySelector('.faq-question-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Category Filtering
  const filterPills = Array.from(document.querySelectorAll('.cat-pill'));
  const categoryCards = Array.from(document.querySelectorAll('.faq-category-card'));
  const searchInput = document.getElementById('faqSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const resultsCount = document.getElementById('searchResultsCount');
  const noResultsBox = document.getElementById('faqNoResults');
  const resetBtn = document.getElementById('btnResetSearch');

  let activeCategory = 'all';

  function applyFilters() {
    const rawQuery = (searchInput.value || '').trim();
    const query = rawQuery.toLowerCase();
    
    // Toggle clear button
    if (searchClearBtn) {
      searchClearBtn.style.display = rawQuery.length > 0 ? 'block' : 'none';
    }

    let totalVisibleQuestions = 0;

    categoryCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const matchesCategory = (activeCategory === 'all' || activeCategory === cardCategory);

      if (!matchesCategory) {
        card.style.display = 'none';
        return;
      }

      // Check items inside this category
      const itemsInCard = Array.from(card.querySelectorAll('.faq-accordion-item'));
      let visibleInThisCard = 0;

      itemsInCard.forEach(item => {
        const qText = item.querySelector('.faq-q-text')?.textContent.toLowerCase() || '';
        const aText = item.querySelector('.faq-answer-content')?.textContent.toLowerCase() || '';
        
        const matchesSearch = !query || qText.includes(query) || aText.includes(query);

        if (matchesSearch) {
          item.style.display = '';
          visibleInThisCard++;
          totalVisibleQuestions++;

          // Auto-expand if searching with a query
          if (query.length >= 2) {
            item.classList.add('active');
            const btn = item.querySelector('.faq-question-btn');
            if (btn) btn.setAttribute('aria-expanded', 'true');
          }
        } else {
          item.style.display = 'none';
          item.classList.remove('active');
          const btn = item.querySelector('.faq-question-btn');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });

      if (visibleInThisCard > 0) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });

    // Update count display
    if (resultsCount) {
      resultsCount.innerHTML = `Showing <strong>${totalVisibleQuestions}</strong> of 60 answers`;
    }

    // Toggle No Results Message
    if (noResultsBox) {
      if (totalVisibleQuestions === 0) {
        noResultsBox.classList.add('visible');
      } else {
        noResultsBox.classList.remove('visible');
      }
    }
  }

  // Pill click handlers
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');
      activeCategory = pill.getAttribute('data-filter');
      applyFilters();

      // If specific category selected, scroll to it smoothly
      if (activeCategory !== 'all') {
        const targetSection = document.getElementById(activeCategory);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Search input event
  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  // Clear button click
  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchInput.focus();
      applyFilters();
    });
  }

  // Reset filter button
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      searchInput.value = '';
      activeCategory = 'all';
      filterPills.forEach(p => {
        const isAll = p.getAttribute('data-filter') === 'all';
        p.classList.toggle('active', isAll);
        p.setAttribute('aria-selected', isAll ? 'true' : 'false');
      });
      applyFilters();
    });
  }

  // Initial state: open first question of each category for great initial preview
  categoryCards.forEach(card => {
    const firstItem = card.querySelector('.faq-accordion-item');
    if (firstItem) {
      firstItem.classList.add('active');
      const btn = firstItem.querySelector('.faq-question-btn');
      if (btn) btn.setAttribute('aria-expanded', 'true');
    }
  });
});
</script>

</body>
</html>
"@

# Normalize to LF endings only (no CRLF)
$lfHtml = $fullHtml.Replace("`r`n", "`n")

# Write using UTF8 without BOM and LF endings
$targetPath = "C:\Users\Jithu\.gemini\antigravity\scratch\inspectcar-booking\faq.html"
[System.IO.File]::WriteAllText($targetPath, $lfHtml, (New-Object System.Text.UTF8Encoding $false))

Write-Host "Successfully generated $targetPath"
Write-Host "File size: $((Get-Item $targetPath).Length) bytes"
