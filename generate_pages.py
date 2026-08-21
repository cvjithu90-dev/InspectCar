import json
import os

pages = [
    {
        "filename": "used-car-inspection.html",
        "title": "Used Car Inspection in Bangalore | InspectCar — 300+ Point Check",
        "desc": "Buying a used car in Bangalore? InspectCar provides an independent pre-purchase vehicle inspection at the vehicle's location. Our inspection covers the vehicle's exterior, interior, mechanical components, diagnostics, underbody, tyres, electrical systems and other important areas to help you make a more informed buying decision.",
        "keywords": "used car inspection Bangalore, pre purchase car inspection, used vehicle inspection Bangalore, second hand car inspection Bangalore, car inspection before buying",
        "h1": "Used Car Inspection in Bangalore",
        "schema_type": "Service",
        "faqs": [
            ("What does a used car inspection include?", "Our inspection covers 300+ checkpoints including the engine, exterior, interior, underbody, electricals, and an advanced OBD computer scan."),
            ("How long does it take?", "A typical inspection takes about 60 to 90 minutes depending on the vehicle's condition and accessibility."),
            ("Do you come to the seller's location?", "Yes, we offer doorstep service across Bangalore. Our inspector will visit the seller's location to perform the checks."),
            ("How do I book?", "You can book directly via our website by selecting a package or contacting us on WhatsApp/Phone.")
        ],
        "content": '''<div class="content-section">
        <h2>Why You Need a Second-Hand Car Inspection in Bangalore</h2>
        <p>Purchasing a used vehicle is a major financial decision. Without a thorough check, you risk buying a vehicle with hidden accidental damage, a tampered odometer, or upcoming expensive repairs. Our comprehensive pre-purchase car inspection gives you complete peace of mind.</p>
        <h3>What's Covered in Our 300+ Point Check?</h3>
        <p>Our expert technicians conduct a rigorous evaluation of every critical component of the vehicle. We don't just look at the surface; we delve deep to ensure you know exactly what you are buying.</p>
        <ul>
            <li><strong>Exterior & Body:</strong> Checking for repainted panels, rust, accident damage, and panel gaps.</li>
            <li><strong>Interior:</strong> Inspecting dashboard, seats, electronics, air conditioning, and safety features.</li>
            <li><strong>Engine & Transmission:</strong> Listening for abnormal noises, checking fluid levels, and transmission shifting.</li>
            <li><strong>Electricals:</strong> Testing battery health, alternator, lights, and all electronic sensors.</li>
            <li><strong>Tyres & Underbody:</strong> Assessing tyre wear, suspension health, exhaust system, and rust or leaks underneath.</li>
            <li><strong>OBD System Scan:</strong> Deep diagnostic scan of the car's computer to find hidden error codes and historical faults.</li>
        </ul>
        <h3>Why Choose InspectCar?</h3>
        <p>We are a fully independent service, meaning we have no ties to dealers or sellers. Our only priority is you—the buyer. We offer flexible scheduling, covering all major areas across Bangalore, and deliver detailed digital reports shortly after the inspection.</p>
        </div>'''
    },
    {
        "filename": "new-car-pdi.html",
        "title": "New Car PDI Inspection in Bangalore | InspectCar — Pre Delivery Check",
        "desc": "Get a professional New Car Pre-Delivery Inspection (PDI) in Bangalore. We check body panels, paint, electricals & more before you take delivery.",
        "keywords": "new car PDI Bangalore, pre delivery inspection Bangalore, PDI for new car, new car inspection Bangalore, PDI service Bangalore",
        "h1": "New Car PDI Inspection in Bangalore",
        "schema_type": "Service",
        "faqs": [
            ("What is PDI?", "Pre-Delivery Inspection (PDI) is a thorough check performed on a brand new car before you take delivery to ensure there are no manufacturing defects or transit damages."),
            ("Do new cars need inspection?", "Yes! New cars often suffer transit damage, have factory paint defects, or sit in stockyards for months. A PDI ensures you get a flawless car."),
            ("When should I book PDI?", "You should book a PDI after the dealer allocates a specific vehicle (VIN) to you, but before the registration process begins."),
            ("What defects are typically found?", "Common defects include repainted panels from transit damage, interior scratches, missing accessories, or electrical glitches.")
        ],
        "content": '''<div class="content-section">
        <h2>What is a Pre-Delivery Inspection and Why It Matters</h2>
        <p>Many buyers assume that a new car is perfect. However, vehicles travel long distances from the factory and are often stored in open stockyards for months. During this time, they are susceptible to weather damage, rat bites, and transit accidents. A PDI for a new car ensures that the vehicle assigned to you is in pristine condition.</p>
        <h3>What We Check During a New Car PDI</h3>
        <p>Our comprehensive new car inspection in Bangalore covers everything from top to bottom:</p>
        <ul>
            <li><strong>Body Panels & Paint:</strong> Using a paint coating thickness gauge to detect repainted panels, touch-ups, or swirl marks from poor washing.</li>
            <li><strong>Electrical & AC:</strong> Ensuring all interior features, infotainment, and air conditioning systems work flawlessly.</li>
            <li><strong>Interiors:</strong> Checking for stains, tears, or scuffs on the upholstery and dashboard.</li>
            <li><strong>Fluids & Mechanicals:</strong> Verifying engine oil, coolant, and brake fluid levels.</li>
            <li><strong>Documentation & Accessories:</strong> Checking the VIN/Chassis number, manufacturing month/year, and ensuring the spare wheel and tool kits are present.</li>
        </ul>
        <h3>Why Trust InspectCar for PDI?</h3>
        <p>Our unbiased experts spot subtle issues that an untrained eye might miss. If we find defects, you can request a replacement vehicle or demand repairs before the car is registered in your name. We save you from years of regret.</p>
        </div>'''
    },
    {
        "filename": "pre-purchase-inspection.html",
        "title": "Pre-Purchase Car Inspection Bangalore | InspectCar — Buy with Confidence",
        "desc": "Avoid buying a lemon. Book a thorough pre-purchase car inspection in Bangalore to check for hidden damage, odometer fraud, and mechanical issues.",
        "keywords": "pre purchase car inspection Bangalore, vehicle inspection before buying, car inspection before purchase, pre purchase vehicle inspection",
        "h1": "Pre-Purchase Car Inspection in Bangalore",
        "schema_type": "Service",
        "faqs": [
            ("What is a pre-purchase inspection?", "It is an independent, comprehensive evaluation of a used vehicle by an expert mechanic before you finalize the purchase."),
            ("How is it different from a service check?", "A service check focuses on routine maintenance. A pre-purchase inspection actively looks for hidden accidental damage, fraud, and future repair costs."),
            ("Is it worth the cost?", "Absolutely. Spending a small amount on inspection can save you lakhs of rupees by avoiding a flood-damaged or accidental car."),
            ("How quickly do I get the report?", "Our detailed digital report is shared within hours of completing the physical inspection.")
        ],
        "content": '''<div class="content-section">
        <h2>What Does a Pre-Purchase Inspection Mean?</h2>
        <p>A vehicle inspection before buying is an objective evaluation of a car's current condition by an independent third-party expert. We help you uncover the true history and health of the car.</p>
        <h3>Risks of Buying Without an Inspection</h3>
        <p>Skipping a pre-purchase vehicle inspection can lead to disastrous financial consequences. Common hidden issues include:</p>
        <ul>
            <li><strong>Hidden Accidental Damage:</strong> Cars superficially repaired after major crashes with structural damage intact.</li>
            <li><strong>Flood Damage:</strong> Cars with water-damaged electronics and rusting underbodies.</li>
            <li><strong>Odometer Fraud:</strong> Clocked meters that hide the true wear and tear of the engine.</li>
            <li><strong>Upcoming Major Repairs:</strong> Worn out clutches, failing transmissions, or suspension overhauls that the seller is trying to avoid paying for.</li>
        </ul>
        <h3>The InspectCar Process</h3>
        <p>Our process is simple and hassle-free. 1) You book the inspection online. 2) Our expert inspector visits the car's location anywhere in Bangalore. 3) We conduct the thorough check. 4) A detailed report is delivered to you in hours. Enjoy total peace of mind before you transfer your hard-earned money.</p>
        </div>'''
    },
    {
        "filename": "car-inspection-cost.html",
        "title": "Car Inspection Cost in Bangalore | InspectCar — Transparent Pricing",
        "desc": "Check out our transparent car inspection costs in Bangalore. Packages start at ₹2000. Super Value ₹2500, Luxury Expert ₹3599. No hidden charges.",
        "keywords": "car inspection cost Bangalore, how much does car inspection cost, vehicle inspection price Bangalore, car inspection charges Bangalore",
        "h1": "Car Inspection Cost in Bangalore",
        "schema_type": "Service",
        "faqs": [
            ("What is included in the price?", "The price includes the mechanic's visit to the vehicle location, the complete physical and diagnostic checks as per the package, and a detailed digital report."),
            ("Any travel charges?", "For most major areas within Bangalore city limits, there are no extra travel charges. Distant suburbs may incur a nominal fee."),
            ("Can I get a refund?", "If the seller backs out or the car is sold before we inspect it, we offer a full refund or can inspect an alternate car for you."),
            ("Do you offer discounts?", "We believe in transparent pricing without hidden markups. Our prices are fixed and offer the best value in the market.")
        ],
        "content": '''<div class="content-section">
        <h2>Transparent Pricing for Every Need</h2>
        <p>We believe vehicle inspection prices in Bangalore should be clear and fair. Whether you are buying a budget hatchback, a luxury sedan, or a brand new car, we have a package tailored for you.</p>
        <h3>Our Inspection Packages</h3>
        <ul>
            <li><strong>Super Value (₹2500):</strong> Ideal for standard hatchbacks, sedans, and compact SUVs. Includes 250+ check points, an advanced OBD diagnostic scan, test drive evaluation, and a detailed report.</li>
            <li><strong>Luxury Expert (₹3599):</strong> Designed for premium and luxury cars. Includes 300+ checks, digital paint gauge testing, deep engine health analysis, and an AI-driven vehicle score.</li>
            <li><strong>Quick Delivery / PDI (₹2000):</strong> The perfect pre-delivery inspection for brand new cars to ensure no factory or transit defects.</li>
        </ul>
        <h3>Why the Cost is Worth It</h3>
        <p>Paying car inspection charges in Bangalore is not an expense; it is an investment. Spending ₹2500 can easily save you ₹50,000 to ₹2 Lakhs on hidden repairs, suspension overhauls, or by avoiding a fundamentally flawed accidental vehicle altogether.</p>
        </div>'''
    },
    {
        "filename": "service-history-check.html",
        "title": "Car Service History Check in Bangalore | InspectCar",
        "desc": "Verify car service records with InspectCar in Bangalore. We check service books, dealer records, and OBD data to ensure the car was well maintained.",
        "keywords": "car service history check, vehicle service record check, service history verification Bangalore",
        "h1": "Car Service History Check in Bangalore",
        "schema_type": "Service",
        "faqs": [
            ("Why is service history important?", "It proves the car was maintained on time, helps verify the odometer reading, and shows if major parts were replaced."),
            ("What if service book is missing?", "If the physical book is missing, we check OBD ECU logs and visible maintenance signs to estimate how well it was kept, and recommend verifying with the authorized dealer."),
            ("Can you detect skipped service?", "Yes, degraded fluids, excessive sludge in the engine, and unusual wear patterns often point to missed or delayed servicing."),
            ("What is an OBD diagnostic check?", "It involves connecting a scanner to the car's computer to read fault codes, historical errors, and actual ECU mileage data.")
        ],
        "content": '''<div class="content-section">
        <h2>Why Service History Matters</h2>
        <p>Verifying the vehicle service record tells you the story of the car's life. Consistent maintenance means the engine will likely last longer. Service history reveals maintenance quality, highlights any recurring mechanical issues, and confirms the status of the manufacturer's warranty.</p>
        <h3>How InspectCar Checks Service Records</h3>
        <p>Our service history verification in Bangalore goes beyond just looking at a piece of paper. We use a multi-pronged approach:</p>
        <ul>
            <li><strong>Physical Inspection:</strong> We examine the physical service book for authentic stamps, dates, and mileage progression.</li>
            <li><strong>OBD Error History:</strong> Our diagnostic scanners read historical error codes stored in the ECU, which can reveal past unresolved issues.</li>
            <li><strong>Visible Maintenance Signs:</strong> We inspect engine oil quality, coolant color, brake pad wear, and belt condition to see if they match the claimed service records.</li>
            <li><strong>Dealership Cross-Reference:</strong> We advise buyers on how to cross-check records with authorized service centers using the VIN.</li>
        </ul>
        <h3>Red Flags in Service History</h3>
        <p>We alert you to major red flags such as irregular mileage jumps between services, missing stamps for major interval services (like timing belt replacements), or a complete lack of records for a relatively new car.</p>
        </div>'''
    },
    {
        "filename": "odometer-check.html",
        "title": "Odometer Tampering Check in Bangalore | InspectCar",
        "desc": "Detect odometer fraud with our odometer tampering check in Bangalore. We use OBD scans and physical wear analysis to verify the true mileage.",
        "keywords": "odometer tampering check, odometer fraud detection Bangalore, odometer rollback check, mileage verification car",
        "h1": "Odometer Tampering Check in Bangalore",
        "schema_type": "Service",
        "faqs": [
            ("How common is odometer tampering in India?", "Unfortunately, it is quite common. A significant percentage of used cars in the unorganized market have rolled-back meters to inflate their price."),
            ("Can OBD detect tampering?", "Yes, in many modern cars, the true mileage is stored in multiple ECUs (like ABS or transmission), which often don't match the rolled-back dashboard display."),
            ("What are signs of a rolled-back odometer?", "Worn steering wheels, faded pedal pads, sagging seats, and old tyres on a supposedly low-mileage car are major indicators."),
            ("Is the odometer check included in standard inspection?", "Yes, mileage verification is a core part of all our pre-purchase inspection packages.")
        ],
        "content": '''<div class="content-section">
        <h2>Understanding Odometer Fraud</h2>
        <p>Odometer rollback involves illegally altering a vehicle's dashboard mileage to make it appear less driven. This not only inflates the selling price but also hides the fact that major components (like the timing belt, suspension, or clutch) are due for expensive replacements.</p>
        <h3>Signs of Odometer Tampering</h3>
        <p>Our odometer fraud detection experts in Bangalore look for subtle inconsistencies:</p>
        <ul>
            <li><strong>Wear Patterns:</strong> Heavy wear on the steering wheel, gear knob, pedals, and driver's seat that doesn't align with a "low mileage" claim.</li>
            <li><strong>Service Records:</strong> Service book dates and mileage that contradict the current dashboard reading.</li>
            <li><strong>Dashboard Tampering:</strong> Physical signs of cluster removal, missing screws, or scratched plastic covers around the instrument panel.</li>
        </ul>
        <h3>How InspectCar Detects Mileage Fraud</h3>
        <p>We use a multi-point cross-reference system. First, we compare physical wear versus the displayed mileage. Next, we use advanced OBD scanners to pull data directly from the car's Engine Control Unit (ECU) and other modules, which often retain the true mileage even if the dashboard was hacked. Buying a tampered car can lead to unexpected breakdowns and massive repair bills—we help you avoid this trap.</p>
        </div>'''
    },
    {
        "filename": "vin-check.html",
        "title": "VIN Verification in Bangalore | InspectCar — Check Car History",
        "desc": "Ensure the used car is legitimate with VIN verification in Bangalore. We check chassis numbers for tampering, accident history, and stolen parts.",
        "keywords": "VIN verification Bangalore, VIN check India, chassis number check, car history check, vehicle identification number check",
        "h1": "VIN Verification & Car History Check in Bangalore",
        "schema_type": "Service",
        "faqs": [
            ("What is a VIN?", "A Vehicle Identification Number (VIN) is a unique 17-character code assigned to every car, acting as its fingerprint."),
            ("How do I find my car's VIN?", "It is typically located on the dashboard near the windshield, on the driver's side door jamb, or stamped into the engine bay/chassis."),
            ("Can a VIN tell accident history?", "Yes, a VIN check can reveal if the car was declared a total loss by insurance, involved in major accidents, or has open manufacturer recalls."),
            ("What if the VIN is tampered?", "A tampered VIN is a massive red flag indicating a potentially stolen vehicle or a major rebuild. You should walk away immediately.")
        ],
        "content": '''<div class="content-section">
        <h2>What is a VIN and What Does it Reveal?</h2>
        <p>The Vehicle Identification Number (VIN) is a 17-character code that provides a wealth of information about the car's history. It reveals the manufacturer, model year, assembly plant, and engine type. Most importantly, a car history check using the VIN can uncover if the car has a shady past.</p>
        <h3>Importance of VIN Verification</h3>
        <p>Conducting a VIN check in India is critical for several reasons:</p>
        <ul>
            <li><strong>Stolen Car Check:</strong> Ensures you aren't unknowingly buying a stolen vehicle, which could lead to confiscation by the police.</li>
            <li><strong>Accident & Total Loss History:</strong> Checks if the car was severely damaged, written off by insurance, and rebuilt unsafely.</li>
            <li><strong>Recall Status:</strong> Identifies if the manufacturer has issued any critical safety recalls for that specific car that haven't been fixed.</li>
        </ul>
        <h3>What InspectCar Checks</h3>
        <p>During our physical inspection, we don't just look at the RC book. We physically verify that the VIN plates on the dashboard and door jamb match the RC. We also inspect the chassis engraving and engine number for any signs of grinding, welding, or tampering. Secure your investment with a verified car history check.</p>
        </div>'''
    },
    {
        "filename": "car-inspection-report.html",
        "title": "Car Inspection Report in Bangalore | InspectCar — Detailed Vehicle Report",
        "desc": "Get a comprehensive car inspection report in Bangalore. Our digital reports include photos, AI scores, categorization (Pass/Warn/Fail), and buying advice.",
        "keywords": "car inspection report, vehicle inspection report Bangalore, detailed car inspection report, used car inspection report India",
        "h1": "Car Inspection Report — What You Get with InspectCar",
        "schema_type": "Service",
        "faqs": [
            ("How soon do I get the report?", "You will receive the complete digital PDF report within a few hours of the physical inspection being completed."),
            ("Is the report digital or physical?", "The report is provided in a high-resolution, interactive digital PDF format that is easy to read on smartphones and computers."),
            ("Can I share the report?", "Yes, you can easily share the digital report with your family, mechanic, or the seller for negotiation purposes."),
            ("What does the AI score mean?", "The AI score (0-100) is a quick, objective rating of the car's overall health based on the inspector's detailed inputs, helping you compare different cars easily.")
        ],
        "content": '''<div class="content-section">
        <h2>Inside the InspectCar Digital Report</h2>
        <p>We believe in complete transparency. Our vehicle inspection report is not just a checklist; it's a deep-dive document designed to empower you during your purchase decision. Delivered directly to your phone or email, our digital PDF report covers every aspect of the car.</p>
        <h3>Report Features</h3>
        <ul>
            <li><strong>AI-Driven Score (0-100):</strong> An objective overall health score that makes it easy to evaluate the car at a glance.</li>
            <li><strong>Category-Wise Breakdown:</strong> Detailed sections for Exterior, Interior, Engine, Transmission, Suspension, Tyres, and Electricals.</li>
            <li><strong>Pass / Warn / Fail System:</strong> Each of the 300+ checkpoints is clearly marked, so you know exactly what needs immediate attention versus what is in good condition.</li>
            <li><strong>High-Resolution Photos:</strong> Photographic evidence of all damages, scratches, oil leaks, and component wear.</li>
            <li><strong>Inspector Notes & OBD Data:</strong> Specific technical comments from our expert mechanic and raw data from the diagnostic scan.</li>
        </ul>
        <h3>Final Recommendation & Negotiation Tips</h3>
        <p>At the end of the used car inspection report, our expert provides a clear verdict: <strong>Buy, Negotiate, or Avoid</strong>. We also include actionable negotiation tips based on the estimated repair costs for the flaws found, helping you get the best deal possible.</p>
        </div>'''
    }
]

template = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta name="keywords" content="{keywords}">
<link rel="canonical" href="https://inspectcar.in/{filename}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="https://inspectcar.in/{filename}">
<meta property="og:type" content="website">
<meta property="og:image" content="https://inspectcar.in/images/Logo.webp">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
<script type="application/ld+json">
{{
  "@context": "https://schema.org/",
  "@type": "{schema_type}",
  "name": "{title}",
  "description": "{desc}",
  "provider": {{
    "@type": "LocalBusiness",
    "name": "InspectCar"
  }}
}}
</script>
<style>
body {{ font-family: 'Inter', sans-serif; background: #0E0E1C; color: #F4F4F6; }}
.page-hero {{ padding: 120px 20px 80px; text-align: center; background: radial-gradient(circle at 50% 0%, rgba(99,102,241,0.25), transparent 60%); }}
.page-hero h1 {{ font-size: clamp(28px,5vw,52px); font-weight: 800; margin-bottom: 20px; }}
.page-hero h1 span {{ background: linear-gradient(135deg,#6366F1,#8B5CF6,#A78BFA); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }}
.page-hero p {{ font-size: 18px; color: #9CA3AF; max-width: 700px; margin: 0 auto 36px; line-height: 1.7; }}
.cta-btn {{ display: inline-block; background: linear-gradient(135deg,#6366F1,#8B5CF6); color: #fff; padding: 16px 40px; border-radius: 50px; font-weight: 700; font-size: 16px; text-decoration: none; transition: opacity 0.2s; }}
.cta-btn:hover {{ opacity: 0.85; }}
.content-section {{ max-width: 900px; margin: 0 auto; padding: 60px 20px; }}
.content-section h2 {{ font-size: 28px; font-weight: 700; margin-bottom: 16px; color: #A78BFA; }}
.content-section h3 {{ font-size: 20px; font-weight: 600; margin: 28px 0 10px; color: #F4F4F6; }}
.content-section p {{ color: #9CA3AF; line-height: 1.8; margin-bottom: 16px; font-size: 15px; }}
.content-section ul {{ color: #9CA3AF; line-height: 1.8; padding-left: 20px; margin-bottom: 16px; }}
.content-section ul li {{ margin-bottom: 8px; }}
.checklist-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(220px,1fr)); gap: 16px; margin: 32px 0; }}
.check-card {{ background: #161625; border: 1px solid rgba(99,102,241,0.2); border-radius: 12px; padding: 20px; }}
.check-card i {{ color: #6366F1; font-size: 22px; margin-bottom: 12px; display: block; }}
.check-card h4 {{ font-size: 15px; font-weight: 600; margin-bottom: 6px; }}
.check-card p {{ font-size: 13px; color: #9CA3AF; margin: 0; }}
.faq-section {{ max-width: 900px; margin: 0 auto; padding: 40px 20px 80px; }}
.faq-section h2 {{ font-size: 28px; font-weight: 700; margin-bottom: 32px; }}
.faq-item {{ background: #161625; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; margin-bottom: 12px; overflow: hidden; }}
.faq-q {{ padding: 20px 24px; font-weight: 600; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }}
.faq-a {{ padding: 0 24px 20px; color: #9CA3AF; line-height: 1.7; font-size: 14px; }}
.cta-box {{ background: linear-gradient(135deg,rgba(99,102,241,0.15),rgba(139,92,246,0.15)); border: 1px solid rgba(99,102,241,0.3); border-radius: 20px; padding: 48px 32px; text-align: center; margin: 60px 20px; max-width: 900px; margin-left: auto; margin-right: auto; }}
.cta-box h2 {{ font-size: 28px; font-weight: 800; margin-bottom: 12px; }}
.cta-box p {{ color: #9CA3AF; margin-bottom: 28px; font-size: 15px; }}
.price-badges {{ display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-bottom: 32px; }}
.price-badge {{ background: #161625; border: 1px solid rgba(99,102,241,0.3); border-radius: 12px; padding: 16px 24px; text-align: center; }}
.price-badge .amount {{ font-size: 24px; font-weight: 800; color: #A78BFA; }}
.price-badge .label {{ font-size: 12px; color: #9CA3AF; }}
/* Nav styles matching main site */
.navbar {{ display:flex; align-items:center; justify-content:space-between; padding:0 32px; height:70px; background:rgba(14,14,28,0.95); backdrop-filter:blur(20px); border-bottom:1px solid rgba(255,255,255,0.06); position:fixed; top:0; left:0; right:0; z-index:1000; }}
.logo {{ display:flex; align-items:center; text-decoration:none; }}
.logo img {{ height:36px; }}
.nav-links {{ display:flex; gap:32px; list-style:none; margin:0; padding:0; }}
.nav-links a {{ color:#9CA3AF; text-decoration:none; font-size:14px; font-weight:500; transition:color 0.2s; }}
.nav-links a:hover {{ color:#fff; }}
.nav-actions {{ display:flex; gap:10px; align-items:center; }}
.nav-circle {{ width:38px; height:38px; border-radius:50%; display:flex; align-items:center; justify-content:center; text-decoration:none; font-size:14px; transition:opacity 0.2s; }}
.call-circle {{ background:rgba(99,102,241,0.2); color:#818CF8; border:1px solid rgba(99,102,241,0.3); }}
.whatsapp-circle {{ background:#25D366; color:#fff; }}
.footer {{ background:#0A0A14; border-top:1px solid rgba(255,255,255,0.06); padding:60px 0 0; margin-top:80px; }}
.footer-container {{ max-width:1200px; margin:0 auto; padding:0 32px; display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:40px; }}
.footer-brand p {{ color:#6B7280; font-size:14px; line-height:1.7; margin:16px 0; }}
.social-icons {{ display:flex; gap:10px; }}
.social-icons a {{ width:36px; height:36px; border-radius:50%; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.08); display:flex; align-items:center; justify-content:center; color:#9CA3AF; text-decoration:none; transition:all 0.2s; font-size:13px; }}
.social-icons a:hover {{ background:rgba(99,102,241,0.2); color:#A78BFA; }}
.footer-column h3 {{ font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:0.8px; color:#6B7280; margin-bottom:16px; }}
.footer-column a {{ display:block; color:#9CA3AF; text-decoration:none; font-size:14px; margin-bottom:8px; transition:color 0.2s; }}
.footer-column a:hover {{ color:#A78BFA; }}
.footer-column span {{ display:block; color:#9CA3AF; font-size:14px; margin-bottom:8px; }}
.footer-bottom {{ border-top:1px solid rgba(255,255,255,0.06); padding:24px 32px; text-align:center; color:#6B7280; font-size:13px; margin-top:48px; }}
@media(max-width:768px){{ .footer-container{{grid-template-columns:1fr 1fr;}} .nav-links{{display:none;}} }}
@media(max-width:480px){{ .footer-container{{grid-template-columns:1fr;}} }}
</style>
</head>
<body>
<!-- NAVBAR -->
<header>
<nav class="navbar">
  <a href="/" class="logo"><img src="images/Logo.webp" alt="InspectCar"></a>
  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/#services">Services</a></li>
    <li><a href="/#packages">Packages</a></li>
    <li><a href="/#whyus">Why Us</a></li>
    <li><a href="/blogs.html">Blog</a></li>
    <li><a href="/#contact">Contact</a></li>
  </ul>
  <div class="nav-actions">
    <a href="tel:+919900368006" class="nav-circle call-circle"><i class="fas fa-phone"></i></a>
    <a href="https://wa.me/919900368006" target="_blank" class="nav-circle whatsapp-circle"><i class="fab fa-whatsapp"></i></a>
  </div>
</nav>
</header>

<div class="page-hero">
  <h1><span>{h1}</span></h1>
  <p>{desc}</p>
  <a href="https://inspectcar.in/#packages" class="cta-btn">Book Your Inspection</a>
</div>

{content}

<div class="cta-box">
  <h2>Transparent Pricing Packages</h2>
  <p>Choose the right inspection package for your needs.</p>
  <div class="price-badges">
    <div class="price-badge">
      <div class="amount">₹2000</div>
      <div class="label">Quick Delivery (PDI)</div>
    </div>
    <div class="price-badge">
      <div class="amount">₹2500</div>
      <div class="label">Super Value</div>
    </div>
    <div class="price-badge">
      <div class="amount">₹3599</div>
      <div class="label">Luxury Expert</div>
    </div>
  </div>
  <a href="https://inspectcar.in/#packages" class="cta-btn">View All Packages & Book Now</a>
</div>

<div class="faq-section">
  <h2>Frequently Asked Questions</h2>
  {faq_html}
</div>

<!-- FOOTER -->
<footer class="footer">
  <div class="footer-container">
    <div class="footer-brand">
      <img src="images/Logo.webp" alt="InspectCar" style="height:36px;">
      <p>AI-powered vehicle inspections helping buyers make confident decisions with transparent reports, certified experts and advanced diagnostics.</p>
      <div class="social-icons">
        <a href="https://www.facebook.com/InspectCar.in/" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/inspectcar_in" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://x.com/InspectCar" target="_blank"><i class="fab fa-x-twitter"></i></a>
        <a href="https://wa.me/919900368006" target="_blank"><i class="fab fa-whatsapp"></i></a>
        <a href="https://www.linkedin.com/company/inspectcar" target="_blank"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
    <div class="footer-column">
      <h3>Company</h3>
      <a href="/">Home</a>
      <a href="/#services">Services</a>
      <a href="/#packages">Packages</a>
      <a href="/blogs.html">Blog & Buyer Guides</a>
      <a href="/#contact">Contact</a>
    </div>
    <div class="footer-column">
      <h3>Services</h3>
      <a href="/used-car-inspection.html">Used Car Inspection</a>
      <a href="/new-car-pdi.html">New Car PDI</a>
      <a href="/pre-purchase-inspection.html">Pre-Purchase Inspection</a>
      <a href="/odometer-check.html">Odometer Check</a>
      <a href="/vin-check.html">VIN Verification</a>
    </div>
    <div class="footer-column">
      <h3>Contact</h3>
      <span><i class="fas fa-phone" style="color:#A78BFA;margin-right:6px;"></i> +91 99003 68006</span>
      <span><i class="fas fa-envelope" style="color:#A78BFA;margin-right:6px;"></i> info@inspectcar.in</span>
      <span><i class="fas fa-location-dot" style="color:#A78BFA;margin-right:6px;"></i> Bangalore, Karnataka</span>
    </div>
  </div>
  <div class="footer-bottom">© 2026 <strong>InspectCar</strong>. All Rights Reserved. | Designed with ❤️ in Bangalore</div>
</footer>
<script>
document.querySelectorAll('.faq-q').forEach(q => {{
  q.addEventListener('click', () => {{
    const a = q.nextElementSibling;
    if (a.style.display === 'none' || !a.style.display) {{
      a.style.display = 'block';
    }} else {{
      a.style.display = 'none';
    }}
  }});
}});
</script>
</body>
</html>"""

target_dir = r"C:\Users\Jithu\.gemini\antigravity\scratch\inspectcar-booking"
for page in pages:
    faq_html = ""
    for q, a in page['faqs']:
        faq_html += f'<div class="faq-item"><div class="faq-q">{q} <i class="fas fa-chevron-down"></i></div><div class="faq-a" style="display:none;">{a}</div></div>'
    
    html = template.format(
        title=page['title'],
        desc=page['desc'],
        keywords=page['keywords'],
        filename=page['filename'],
        h1=page['h1'],
        schema_type=page['schema_type'],
        content=page['content'],
        faq_html=faq_html
    )
    with open(os.path.join(target_dir, page['filename']), 'w', encoding='utf-8') as f:
        f.write(html)
print("Done")
