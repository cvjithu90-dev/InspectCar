import os
import random

template = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Used Car Inspection in {location}, Bangalore | InspectCar</title>
<meta name="description" content="InspectCar provides professional used car & pre-purchase vehicle inspection services in {location}, Bangalore. Doorstep inspection at seller's location. Book now.">
<meta name="keywords" content="car inspection {location}, used car inspection {location} Bangalore, vehicle inspection {location}, pre purchase car inspection {location}">
<link rel="canonical" href="https://inspectcar.in/locations/{slug}.html">
<meta property="og:title" content="Used Car Inspection in {location}, Bangalore | InspectCar">
<meta property="og:url" content="https://inspectcar.in/locations/{slug}.html">
<meta property="og:image" content="https://inspectcar.in/images/Logo.webp">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "InspectCar",
  "description": "Professional car inspection service in {location}, Bangalore",
  "url": "https://inspectcar.in",
  "telephone": "+91 9900368006",
  "email": "info@inspectcar.in",
  "areaServed": "{location}, Bangalore, Karnataka",
  "address": {{ "@type": "PostalAddress", "addressLocality": "Bangalore", "addressRegion": "Karnataka", "addressCountry": "IN" }},
  "priceRange": "₹₹",
  "openingHours": "Mo-Su 08:00-20:00"
}}
</script>
<style>
body {{ font-family:'Inter',sans-serif; background:#0E0E1C; color:#F4F4F6; margin:0; }}
.navbar {{ display:flex; align-items:center; justify-content:space-between; padding:0 32px; height:70px; background:rgba(14,14,28,0.95); backdrop-filter:blur(20px); border-bottom:1px solid rgba(255,255,255,0.06); position:fixed; top:0; left:0; right:0; z-index:1000; }}
.logo img {{ height:36px; }}
.nav-links {{ display:flex; gap:32px; list-style:none; margin:0; padding:0; }}
.nav-links a {{ color:#9CA3AF; text-decoration:none; font-size:14px; font-weight:500; transition:color 0.2s; }}
.nav-links a:hover {{ color:#fff; }}
.nav-actions {{ display:flex; gap:10px; }}
.nav-circle {{ width:38px; height:38px; border-radius:50%; display:flex; align-items:center; justify-content:center; text-decoration:none; font-size:14px; }}
.call-circle {{ background:rgba(99,102,241,0.2); color:#818CF8; border:1px solid rgba(99,102,241,0.3); }}
.whatsapp-circle {{ background:#25D366; color:#fff; }}
.hero {{ padding:130px 20px 80px; text-align:center; background:radial-gradient(circle at 50% 0%,rgba(99,102,241,0.22),transparent 60%); }}
.hero h1 {{ font-size:clamp(28px,5vw,50px); font-weight:800; margin-bottom:16px; }}
.hero h1 span {{ background:linear-gradient(135deg,#6366F1,#8B5CF6,#A78BFA); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }}
.hero p {{ font-size:17px; color:#9CA3AF; max-width:680px; margin:0 auto 32px; line-height:1.7; }}
.cta-btn {{ display:inline-block; background:linear-gradient(135deg,#6366F1,#8B5CF6); color:#fff; padding:14px 36px; border-radius:50px; font-weight:700; font-size:15px; text-decoration:none; }}
.content {{ max-width:880px; margin:0 auto; padding:60px 20px; }}
.content h2 {{ font-size:26px; font-weight:700; color:#A78BFA; margin-bottom:14px; }}
.content h3 {{ font-size:19px; font-weight:600; margin:24px 0 10px; }}
.content p {{ color:#9CA3AF; line-height:1.8; margin-bottom:14px; font-size:15px; }}
.content ul {{ color:#9CA3AF; line-height:1.8; padding-left:20px; }}
.content ul li {{ margin-bottom:8px; }}
.services-grid {{ display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:14px; margin:28px 0; }}
.svc-card {{ background:#161625; border:1px solid rgba(99,102,241,0.2); border-radius:12px; padding:18px; }}
.svc-card i {{ color:#6366F1; font-size:20px; margin-bottom:10px; display:block; }}
.svc-card h4 {{ font-size:14px; font-weight:600; margin-bottom:4px; }}
.svc-card p {{ font-size:12px; color:#9CA3AF; margin:0; }}
.faq-wrap {{ max-width:880px; margin:0 auto; padding:0 20px 80px; }}
.faq-wrap h2 {{ font-size:26px; font-weight:700; margin-bottom:24px; }}
.faq-box {{ background:#161625; border:1px solid rgba(255,255,255,0.07); border-radius:10px; padding:20px 24px; margin-bottom:10px; }}
.faq-box h4 {{ font-size:15px; font-weight:600; margin-bottom:8px; }}
.faq-box p {{ color:#9CA3AF; font-size:14px; line-height:1.7; margin:0; }}
.cta-box {{ background:linear-gradient(135deg,rgba(99,102,241,0.12),rgba(139,92,246,0.12)); border:1px solid rgba(99,102,241,0.25); border-radius:18px; padding:44px 28px; text-align:center; margin:0 20px 60px; }}
.cta-box h2 {{ font-size:26px; font-weight:800; margin-bottom:10px; }}
.cta-box p {{ color:#9CA3AF; margin-bottom:24px; }}
.locations-bar {{ background:#161625; border-top:1px solid rgba(255,255,255,0.06); padding:40px 20px; text-align:center; }}
.locations-bar h3 {{ font-size:16px; color:#9CA3AF; margin-bottom:16px; font-weight:500; }}
.loc-tags {{ display:flex; flex-wrap:wrap; gap:10px; justify-content:center; }}
.loc-tag {{ background:rgba(99,102,241,0.1); border:1px solid rgba(99,102,241,0.2); border-radius:20px; padding:6px 14px; font-size:13px; color:#A78BFA; text-decoration:none; }}
.loc-tag:hover {{ background:rgba(99,102,241,0.2); }}
.footer-simple {{ background:#0A0A14; border-top:1px solid rgba(255,255,255,0.06); padding:28px 20px; text-align:center; color:#6B7280; font-size:13px; }}
.footer-simple a {{ color:#A78BFA; text-decoration:none; }}
@media(max-width:768px){{ .nav-links{{display:none;}} }}
</style>
</head>
<body>
<nav class="navbar">
  <a href="/" class="logo"><img src="../images/Logo.webp" alt="InspectCar"></a>
  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/#services">Services</a></li>
    <li><a href="/#packages">Packages</a></li>
    <li><a href="/blogs.html">Blog</a></li>
    <li><a href="/#contact">Contact</a></li>
  </ul>
  <div class="nav-actions">
    <a href="tel:+919900368006" class="nav-circle call-circle"><i class="fas fa-phone"></i></a>
    <a href="https://wa.me/919900368006" target="_blank" class="nav-circle whatsapp-circle"><i class="fab fa-whatsapp"></i></a>
  </div>
</nav>

<div class="hero">
  <h1>Used Car Inspection in <span>{location}</span></h1>
  <p>{hero_desc}</p>
  <a href="https://inspectcar.in/#packages" class="cta-btn">Book an Inspection</a>
</div>

<div class="content">
  <h2>Why Choose InspectCar in {location}?</h2>
  <p>{content_p1}</p>
  <p>{content_p2}</p>
  
  <h3>Services We Offer in {location}</h3>
  <div class="services-grid">
    <div class="svc-card"><i class="fas fa-car-side"></i><h4>Comprehensive Check</h4><p>200+ point check covering engine, body, interiors.</p></div>
    <div class="svc-card"><i class="fas fa-laptop-medical"></i><h4>OBD Scanning</h4><p>Advanced diagnostic scan to find hidden faults.</p></div>
    <div class="svc-card"><i class="fas fa-file-contract"></i><h4>Document Verification</h4><p>RTO and insurance history checks for peace of mind.</p></div>
    <div class="svc-card"><i class="fas fa-road"></i><h4>Test Drive Analysis</h4><p>Suspension, alignment, and brake tests.</p></div>
  </div>
</div>

<div class="faq-wrap">
  <h2>Frequently Asked Questions in {location}</h2>
  {faqs}
</div>

<div class="cta-box">
  <h2>Ready to inspect a car in {location}?</h2>
  <p>Don't risk buying a lemon. Get it thoroughly checked by our experts today.</p>
  <a href="https://inspectcar.in/#packages" class="cta-btn">View Packages & Book</a>
</div>

<div class="locations-bar">
  <h3>Other Areas We Serve in Bangalore</h3>
  <div class="loc-tags">
    {loc_tags}
  </div>
</div>

<footer class="footer-simple">
  &copy; 2026 InspectCar. All rights reserved. | <a href="/">Home</a>
</footer>
</body>
</html>
"""

index_template = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Car Inspection Across Bangalore | InspectCar</title>
<meta name="description" content="InspectCar provides doorstep used car inspection services across all major localities in Bangalore. Find your area and book an expert mechanic today.">
<meta name="keywords" content="car inspection Bangalore, used car inspection Bangalore, areas served InspectCar">
<link rel="canonical" href="https://inspectcar.in/locations/">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
<style>
body {{ font-family:'Inter',sans-serif; background:#0E0E1C; color:#F4F4F6; margin:0; }}
.navbar {{ display:flex; align-items:center; justify-content:space-between; padding:0 32px; height:70px; background:rgba(14,14,28,0.95); backdrop-filter:blur(20px); border-bottom:1px solid rgba(255,255,255,0.06); position:fixed; top:0; left:0; right:0; z-index:1000; }}
.logo img {{ height:36px; }}
.nav-links {{ display:flex; gap:32px; list-style:none; margin:0; padding:0; }}
.nav-links a {{ color:#9CA3AF; text-decoration:none; font-size:14px; font-weight:500; transition:color 0.2s; }}
.nav-links a:hover {{ color:#fff; }}
.nav-actions {{ display:flex; gap:10px; }}
.nav-circle {{ width:38px; height:38px; border-radius:50%; display:flex; align-items:center; justify-content:center; text-decoration:none; font-size:14px; }}
.call-circle {{ background:rgba(99,102,241,0.2); color:#818CF8; border:1px solid rgba(99,102,241,0.3); }}
.whatsapp-circle {{ background:#25D366; color:#fff; }}
.hero {{ padding:130px 20px 80px; text-align:center; background:radial-gradient(circle at 50% 0%,rgba(99,102,241,0.22),transparent 60%); }}
.hero h1 {{ font-size:clamp(28px,5vw,50px); font-weight:800; margin-bottom:16px; }}
.hero h1 span {{ background:linear-gradient(135deg,#6366F1,#8B5CF6,#A78BFA); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }}
.hero p {{ font-size:17px; color:#9CA3AF; max-width:680px; margin:0 auto 32px; line-height:1.7; }}
.content {{ max-width:1000px; margin:0 auto; padding:60px 20px; }}
.areas-grid {{ display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:20px; }}
.area-card {{ background:#161625; border:1px solid rgba(99,102,241,0.2); border-radius:12px; padding:24px; text-decoration:none; transition:transform 0.2s, background 0.2s; }}
.area-card:hover {{ transform:translateY(-4px); background:#1c1c2e; }}
.area-card h3 {{ color:#A78BFA; margin:0 0 10px 0; font-size:18px; font-weight:600; }}
.area-card p {{ color:#9CA3AF; margin:0; font-size:14px; line-height:1.6; }}
.footer-simple {{ background:#0A0A14; border-top:1px solid rgba(255,255,255,0.06); padding:28px 20px; text-align:center; color:#6B7280; font-size:13px; }}
.footer-simple a {{ color:#A78BFA; text-decoration:none; }}
@media(max-width:768px){{ .nav-links{{display:none;}} }}
</style>
</head>
<body>
<nav class="navbar">
  <a href="/" class="logo"><img src="../images/Logo.webp" alt="InspectCar"></a>
  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/#services">Services</a></li>
    <li><a href="/#packages">Packages</a></li>
    <li><a href="/blogs.html">Blog</a></li>
    <li><a href="/#contact">Contact</a></li>
  </ul>
  <div class="nav-actions">
    <a href="tel:+919900368006" class="nav-circle call-circle"><i class="fas fa-phone"></i></a>
    <a href="https://wa.me/919900368006" target="_blank" class="nav-circle whatsapp-circle"><i class="fab fa-whatsapp"></i></a>
  </div>
</nav>

<div class="hero">
  <h1>Car Inspection Across <span>Bangalore</span></h1>
  <p>InspectCar provides professional, doorstep used car inspections across Bangalore. Our qualified mechanics travel to the seller's location to provide you with a comprehensive vehicle health report before you buy.</p>
</div>

<div class="content">
  <div class="areas-grid">
    {cards}
  </div>
</div>

<footer class="footer-simple">
  &copy; 2026 InspectCar. All rights reserved. | <a href="/">Home</a>
</footer>
</body>
</html>
"""

locations = [
    ('Whitefield', 'whitefield', 'IT hub', 'hatchbacks and compact SUVs'),
    ('Electronic City', 'electronic-city', 'major tech park area', 'sedans and premium SUVs'),
    ('Sarjapur Road', 'sarjapur', 'fast-growing residential corridor', 'family SUVs and EVs'),
    ('Koramangala', 'koramangala', 'vibrant startup hub', 'premium sedans and sporty hatchbacks'),
    ('HSR Layout', 'hsr-layout', 'planned residential neighborhood', 'compact SUVs and luxury cars'),
    ('Bellandur', 'bellandur', 'bustling tech corridor', 'practical hatchbacks and crossovers'),
    ('Marathahalli', 'marathahalli', 'busy commercial and residential area', 'budget-friendly hatchbacks and sedans'),
    ('Indiranagar', 'indiranagar', 'premium residential and commercial locality', 'luxury sedans and high-end SUVs'),
    ('Yelahanka', 'yelahanka', 'expanding northern suburb', 'spacious SUVs and family cars'),
    ('Hebbal', 'hebbal', 'key northern transit hub', 'mid-size sedans and premium SUVs'),
    ('Jayanagar', 'jayanagar', 'traditional residential layout', 'reliable sedans and compact cars'),
    ('JP Nagar', 'jp-nagar', 'established residential area', 'family-friendly hatchbacks and SUVs'),
    ('Bannerghatta Road', 'bannerghatta-road', 'major southern corridor', 'crossovers and practical sedans'),
    ('Rajajinagar', 'rajajinagar', 'classic Bangalore neighborhood', 'compact sedans and versatile hatchbacks'),
    ('Banashankari', 'banashankari', 'large residential area', 'budget hatchbacks and mid-size SUVs'),
    ('Devanahalli', 'devanahalli', 'emerging airport corridor', 'highway-friendly SUVs and premium sedans')
]

out_dir = r'C:\Users\Jithu\.gemini\antigravity\scratch\inspectcar-booking\locations'
os.makedirs(out_dir, exist_ok=True)

all_slugs = [loc[1] for loc in locations]

for loc_name, slug, area_desc, car_types in locations:
    hero_desc = f'Looking to buy a used car in {loc_name}? Our expert mechanics provide thorough doorstep pre-purchase vehicle inspections in this {area_desc}. Don\'t leave your car purchase to chance.'
    
    content_p1 = f'Buying a second-hand vehicle in a {area_desc} like {loc_name} comes with its own set of challenges. Whether you\'re checking out cars parked in apartment complexes or meeting sellers near the major tech hubs, our inspectors travel directly to your location in {loc_name} and surrounding localities. We handle all the technical checks so you can make a confident buying decision.'
    content_p2 = f'We frequently inspect a variety of vehicles in this area, especially {car_types} which are highly sought after by local residents. From hidden accident damage to engine health and odometer tampering, our comprehensive 200+ point checklist covers everything. We\'ve helped hundreds of buyers in {loc_name} avoid expensive repair bills.'
    
    faqs = f'''
    <div class="faq-box">
      <h4>How quickly can you inspect a car in {loc_name}?</h4>
      <p>We typically arrange inspections within a few hours of booking. Our mechanics are stationed strategically across Bangalore and can reach {loc_name} and surrounding areas swiftly.</p>
    </div>
    <div class="faq-box">
      <h4>Can the inspection be done at the seller's apartment or office?</h4>
      <p>Yes! Our doorstep service means the inspector will go directly to the seller's location anywhere in {loc_name}. You don't need to drive the car to a garage.</p>
    </div>
    <div class="faq-box">
      <h4>What types of cars do you inspect here?</h4>
      <p>We inspect all makes and models, but in the {loc_name} area we often see a high volume of {car_types}. Our mechanics are well-versed with both budget and luxury vehicles.</p>
    </div>
    '''
    
    other_slugs = random.sample([s for s in all_slugs if s != slug], 8)
    loc_tags = ''
    for s in other_slugs:
        s_name = next(l[0] for l in locations if l[1] == s)
        loc_tags += f'<a href="../locations/{s}.html" class="loc-tag">{s_name}</a>\n    '
        
    html = template.format(
        location=loc_name,
        slug=slug,
        hero_desc=hero_desc,
        content_p1=content_p1,
        content_p2=content_p2,
        faqs=faqs,
        loc_tags=loc_tags.strip()
    )
    
    with open(os.path.join(out_dir, f'{slug}.html'), 'w', encoding='utf-8') as f:
        f.write(html)

cards = ''
for loc_name, slug, area_desc, car_types in locations:
    cards += f'''
    <a href="{slug}.html" class="area-card">
      <h3>{loc_name}</h3>
      <p>Expert used car inspections in {loc_name}. Covering {car_types} and more.</p>
    </a>
    '''

with open(os.path.join(out_dir, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(index_template.format(cards=cards.strip()))
