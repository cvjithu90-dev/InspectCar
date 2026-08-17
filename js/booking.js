/**
 * InspectCar Interactive Booking Flow & Calendar Controller
 * Connected to Supabase backend for live booking capture
 */

// ============================================================
// SUPABASE CONFIG
// ============================================================
const SUPABASE_URL  = 'https://fklauiwughygdpvfylwg.supabase.co';
const SUPABASE_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrbGF1aXd1Z2h5Z2RwdmZ5bHdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUyMjA0MjIsImV4cCI6MjEwMDc5NjQyMn0.t4KEH1g9TZTW8DgG1rpAU0fFVHXvmcEv86s0w7_jHdA';

// Optional Official Google Maps API Key
// Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your key from Google Cloud Console to enable official Google Places Autocomplete!
const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';

// Optional Ola Maps API Key (India's Native Ola Maps API — 5 Million FREE API calls/month!)
// Sign up at https://maps.olaelectric.com to get your free API Key
const OLA_MAPS_API_KEY = 'YOUR_OLA_MAPS_API_KEY';

let supabaseClient = null;
try {
  if (typeof supabase !== 'undefined' && SUPABASE_URL !== 'YOUR_SUPABASE_URL') {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  }
} catch(e) {
  console.warn('Supabase not loaded, booking will use WhatsApp only.', e);
}

// Auto-load Google Maps Places API SDK if API Key is set
if (GOOGLE_MAPS_API_KEY && GOOGLE_MAPS_API_KEY !== 'YOUR_GOOGLE_MAPS_API_KEY') {
  const gscript = document.createElement('script');
  gscript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&callback=initGooglePlacesSdk`;
  gscript.async = true;
  gscript.defer = true;
  document.head.appendChild(gscript);
}

window.initGooglePlacesSdk = function() {
  const input = document.getElementById('inputGmapsSearch');
  if (input && typeof google !== 'undefined' && google.maps && google.maps.places) {
    const autocomplete = new google.maps.places.Autocomplete(input, {
      componentRestrictions: { country: 'in' }
    });
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place && place.geometry) {
        const lat = place.geometry.location.lat();
        const lon = place.geometry.location.lng();
        const mainName = place.name || place.formatted_address;
        selectGmapsPlace(lat, lon, mainName, place.formatted_address);
      }
    });
  }
};

// ============================================================
// CAR DATABASE — Mainstream brands (Super Value / Quick Delivery)
// ============================================================
const MAINSTREAM_MAKES = {
  'Maruti Suzuki': ['Alto K10', 'S-Presso', 'Celerio', 'Wagon R', 'Ignis', 'Swift', 'Baleno', 'Fronx', 'Dzire', 'Ertiga', 'XL6', 'Brezza', 'Grand Vitara', 'Jimny', 'Invicto'],
  'Hyundai': ['Grand i10 Nios', 'i20', 'Exter', 'Venue', 'Creta', 'Verna', 'Aura', 'Alcazar', 'Tucson', 'Ioniq 5', 'Kona Electric'],
  'Tata': ['Tiago', 'Tigor', 'Altroz', 'Punch', 'Nexon', 'Curvv', 'Harrier', 'Safari', 'Sierra EV', 'Tiago EV', 'Tigor EV', 'Nexon EV', 'Punch EV'],
  'Mahindra': ['Bolero', 'Bolero Neo', 'Scorpio Classic', 'Scorpio-N', 'XUV 3XO', 'Thar', 'Thar Roxx', 'XUV700', 'BE 6e', 'XEV 9e'],
  'Kia': ['Sonet', 'Seltos', 'Carens', 'Carnival', 'EV6'],
  'Honda': ['Amaze', 'City', 'City e:HEV', 'Elevate', 'WR-V'],
  'Toyota': ['Glanza', 'Urban Cruiser Hyryder', 'Rumion', 'Innova Crysta', 'Innova HyCross', 'Fortuner', 'Legender', 'Hilux', 'Vellfire'],
  'Renault': ['Kwid', 'Triber', 'Kiger', 'Duster'],
  'Nissan': ['Magnite'],
  'Skoda': ['Kushaq', 'Slavia', 'Kodiaq', 'Octavia', 'Superb'],
  'Volkswagen': ['Polo', 'Vento', 'Virtus', 'Taigun', 'Tiguan'],
  'Ford': ['Figo', 'Aspire', 'Freestyle', 'EcoSport', 'Endeavour'],
  'MG': ['Hector', 'Hector Plus', 'Astor', 'Gloster', 'Comet EV', 'Windsor EV', 'ZS EV'],
  'Citroen': ['C3', 'C3 Aircross', 'C5 Aircross', 'eC3'],
  'Jeep': ['Compass', 'Meridian', 'Wrangler'],
  'Datsun': ['Go', 'Go+', 'Redi-Go'],
  'Chevrolet': ['Spark', 'Beat', 'Sail', 'Cruze', 'Trailblazer', 'Captiva', 'Enjoy'],
  'Fiat': ['Punto', 'Linea', 'Avventura', 'Urban Cross'],
  'Isuzu': ['D-Max', 'D-Max V-Cross', 'mu-X'],
  'Other / Not Listed': ['Other Model']
};

// ============================================================
// CAR DATABASE — Luxury brands (Luxury Expert only)
// ============================================================
const LUXURY_MAKES = {
  'BMW': ['1 Series', '2 Series Gran Coupe', '3 Series', '3 Series Gran Limousine', '5 Series', '7 Series', 'X1', 'X3', 'X4', 'X5', 'X6', 'X7', 'iX', 'iX1', 'iX3', 'M3', 'M4', 'M5', 'M8', 'XM'],
  'Mercedes-Benz': ['A-Class Limousine', 'C-Class', 'E-Class', 'S-Class', 'GLA', 'GLB', 'GLC', 'GLC Coupe', 'GLE', 'GLS', 'AMG A 35', 'AMG C 43', 'AMG E 53', 'AMG GT', 'EQB', 'EQS', 'EQS SUV', 'Maybach S-Class', 'Maybach GLS'],
  'Audi': ['A3', 'A4', 'A6', 'A7', 'A8', 'Q3', 'Q3 Sportback', 'Q5', 'Q7', 'Q8', 'Q8 e-tron', 'RS3', 'RS5', 'RS7', 'e-tron GT', 'R8', 'TT'],
  'Volvo': ['S60', 'S90', 'V90 Cross Country', 'XC40', 'XC40 Recharge', 'XC60', 'XC90'],
  'Jaguar': ['XE', 'XF', 'XJ', 'F-Pace', 'E-Pace', 'I-Pace', 'F-Type'],
  'Land Rover': ['Defender', 'Discovery', 'Discovery Sport', 'Range Rover Evoque', 'Range Rover Velar', 'Range Rover Sport', 'Range Rover'],
  'Lexus': ['ES 300h', 'NX 350h', 'RX 500h', 'LX 500d', 'LC 500h', 'LS 500h', 'UX 300e'],
  'Porsche': ['Macan', 'Cayenne', 'Cayenne Coupe', 'Panamera', 'Taycan', '911', '718 Cayman', '718 Boxster'],
  'Genesis': ['G80', 'GV70', 'GV80', 'G90'],
  'Lamborghini': ['Huracan', 'Huracan STO', 'Urus', 'Urus S', 'Revuelto'],
  'Ferrari': ['Roma', 'Roma Spider', 'Portofino M', 'F8 Tributo', 'F8 Spider', 'SF90 Stradale', '296 GTB', '296 GTS', 'Purosangue'],
  'Rolls-Royce': ['Ghost', 'Ghost Extended', 'Phantom', 'Phantom Extended', 'Cullinan', 'Spectre'],
  'Bentley': ['Continental GT', 'Continental GTC', 'Flying Spur', 'Bentayga'],
  'Maserati': ['Ghibli', 'Quattroporte', 'Levante', 'GranTurismo', 'Grecale'],
  'Aston Martin': ['Vantage', 'DB11', 'DBX', 'DBS'],
  'McLaren': ['720S', 'Artura', '765LT'],
  'Alfa Romeo': ['Stelvio', 'Giulia', 'Tonale'],
  'MINI': ['3 Door', '5 Door', 'Convertible', 'Countryman', 'Clubman', 'Paceman', 'Cooper SE'],
  'Infiniti': ['Q50', 'QX50', 'QX55', 'QX60', 'QX80'],
};

// Packages that get ALL brands
const LUXURY_PACKAGES = ['lux-drive', 'luxury-expert'];

// ============================================================

(function () {
  'use strict';

  // Packages definition
  const PACKAGES = {
    'expert-drive': { name: 'Expert-Drive (Used car)', price: 2699, points: 'OBD Diagnostics, Fault Code Analysis, Underbody, Odometer & History Check' },
    'lux-drive': { name: 'Lux-Drive (Premium Used Car)', price: 3999, points: 'Full Diagnostics, Advanced Electronic Systems, Originality, Paint & Senior Inspector Review' },
    'pre-drive': { name: 'Pre-Drive (New Car PDI)', price: 1999, points: 'Paint Quality, Engine Bay, Tyre & Wheel, Flood Check & Delivery Readiness' },

    // Backwards compatibility aliases
    'super-value': { name: 'Expert-Drive (Used car)', price: 2699, points: 'OBD Diagnostics, Fault Code Analysis, Underbody, Odometer & History Check' },
    'luxury-expert': { name: 'Lux-Drive (Premium Used Car)', price: 3999, points: 'Full Diagnostics, Advanced Electronic Systems, Originality, Paint & Senior Inspector Review' },
    'quick-delivery': { name: 'Pre-Drive (New Car PDI)', price: 1999, points: 'Paint Quality, Engine Bay, Tyre & Wheel, Flood Check & Delivery Readiness' }
  };

  // State object
  const state = {
    currentStep: 1,
    packageId: 'lux-drive',
    brand: '',
    model: '',
    year: '2022',
    fuel: 'Petrol',
    registration: '',
    selectedDate: null,
    selectedTime: '9:00 AM - 11:00 AM',
    locationType: 'Seller Yard / House',
    address: '',
    area: '',
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    consentTC: false,
    consentPP: false,
    consentTimestamp: null,
    paymentMethod: 'token-199',
    bookingRef: '',
    calendarDate: new Date(),
    gmapsLink: '',
    maxReachedStep: 1,
    isConfirmed: false
  };

  // Set default selectedDate to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  state.selectedDate = tomorrow;

  document.addEventListener('DOMContentLoaded', () => {
    initEventListeners();
    renderCalendar();
    updateStepUI();
    populateMakeDropdown();
    initGmapsAutocomplete();

    // Subscribe to Supabase Realtime changes so canceled/deleted bookings free up slots instantly
    if (supabaseClient) {
      try {
        supabaseClient
          .channel('public:bookings')
          .on('postgres_changes', { event: '*', schema: 'public', table: 'bookings' }, () => {
            if (state.selectedDate) {
              updateSlotAvailability(state.selectedDate);
            }
          })
          .subscribe();
      } catch(e) {
        console.warn('Supabase Realtime subscription error:', e);
      }
    }
  });

  // ============================================================
  // MAKE / MODEL DROPDOWN LOGIC — Supabase-backed with fallback
  // ============================================================

  // Map package ID to Supabase boolean column name
  function pkgToDbField(pkgId) {
    if (pkgId === 'super-value' || pkgId === 'expert-drive') return 'super_value';
    if (pkgId === 'luxury-expert' || pkgId === 'lux-drive') return 'luxury_expert';
    if (pkgId === 'quick-delivery' || pkgId === 'pre-drive') return 'quick_delivery';
    return 'super_value'; // default
  }

  async function populateMakeDropdown() {
    const makeSelect = document.getElementById('inputMake');
    const modelSelect = document.getElementById('inputModel');
    if (!makeSelect) return;

    makeSelect.innerHTML = '<option value="">Loading makes...</option>';
    if (modelSelect) { modelSelect.innerHTML = '<option value="">— Select Make First —</option>'; modelSelect.disabled = true; }

    const field = pkgToDbField(state.packageId);

    try {
      if (supabaseClient) {
        // Fetch makes that have at least one model available for this package
        const { data: models, error } = await supabaseClient
          .from('car_models')
          .select('make_id, car_makes(name)')
          .eq(field, true)
          .order('make_id');

        if (error) throw error;

        // Deduplicate makes
        const seenIds = new Set();
        const makes = [];
        (models || []).forEach(m => {
          if (m.car_makes && !seenIds.has(m.make_id)) {
            seenIds.add(m.make_id);
            makes.push({ id: m.make_id, name: m.car_makes.name });
          }
        });
        makes.sort((a, b) => a.name.localeCompare(b.name));

        if (makes.length > 0) {
          makeSelect.innerHTML = '<option value="">— Select Make —</option>';
          makes.forEach(make => {
            const opt = document.createElement('option');
            opt.value = make.name; // store name not UUID for DB insert
            opt.dataset.id = make.id;
            opt.textContent = make.name;
            if (make.name === state.brand) opt.selected = true;
            makeSelect.appendChild(opt);
          });

          // Re-populate models if brand still valid
          if (state.brand) {
            const selectedOpt = [...makeSelect.options].find(o => o.value === state.brand);
            if (selectedOpt) await populateModelDropdown(state.brand, selectedOpt.dataset.id);
            else { state.brand = ''; state.model = ''; }
          }
          return;
        }
      }
    } catch(e) {
      console.warn('Supabase fetch failed, using fallback:', e);
    }

    // FALLBACK: use hardcoded data
    const makes = (state.packageId === 'luxury-expert' || state.packageId === 'lux-drive')
      ? { ...MAINSTREAM_MAKES, ...LUXURY_MAKES }
      : { ...MAINSTREAM_MAKES };

    makeSelect.innerHTML = '<option value="">— Select Make —</option>';
    Object.keys(makes).sort().forEach(make => {
      const opt = document.createElement('option');
      opt.value = make;
      opt.textContent = make;
      if (make === state.brand) opt.selected = true;
      makeSelect.appendChild(opt);
    });

    if (state.brand && makes[state.brand]) {
      populateFallbackModels(state.brand);
    } else {
      state.brand = ''; state.model = '';
    }
  }

  async function populateModelDropdown(makeName, makeId) {
    const modelSelect = document.getElementById('inputModel');
    if (!modelSelect) return;

    modelSelect.innerHTML = '<option value="">Loading models...</option>';
    modelSelect.disabled = true;

    const field = pkgToDbField(state.packageId);

    try {
      if (supabaseClient && makeId) {
        const { data, error } = await supabaseClient
          .from('car_models')
          .select('id, name')
          .eq('make_id', makeId)
          .eq(field, true)
          .order('name');

        if (error) throw error;

        modelSelect.innerHTML = '<option value="">— Select Model —</option>';
        (data || []).forEach(m => {
          const opt = document.createElement('option');
          opt.value = m.name;
          opt.textContent = m.name;
          if (m.name === state.model) opt.selected = true;
          modelSelect.appendChild(opt);
        });
        modelSelect.disabled = !data || data.length === 0;
        return;
      }
    } catch(e) {
      console.warn('Supabase model fetch failed, using fallback:', e);
    }

    // FALLBACK
    populateFallbackModels(makeName);
  }

  function populateFallbackModels(makeName) {
    const modelSelect = document.getElementById('inputModel');
    if (!modelSelect) return;
    const allMakes = (state.packageId === 'luxury-expert' || state.packageId === 'lux-drive')
      ? { ...MAINSTREAM_MAKES, ...LUXURY_MAKES }
      : { ...MAINSTREAM_MAKES };
    const models = allMakes[makeName] || [];
    modelSelect.innerHTML = '<option value="">— Select Model —</option>';
    models.forEach(m => {
      const opt = document.createElement('option');
      opt.value = m; opt.textContent = m;
      if (m === state.model) opt.selected = true;
      modelSelect.appendChild(opt);
    });
    modelSelect.disabled = models.length === 0;
  }


  // ============================================================
  // EVENT LISTENERS
  // ============================================================
  function initEventListeners() {
    // Open Modal Triggers
    document.querySelectorAll('.primary-btn, .package-btn, [data-open-booking], .open-booking-modal').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();

        const pkgCard = btn.closest('.package-card');
        if (pkgCard) {
          const title = pkgCard.querySelector('h3')?.innerText || '';
          if (title.includes('Expert-Drive') || title.includes('Super Value')) state.packageId = 'expert-drive';
          else if (title.includes('Lux-Drive') || title.includes('Luxury Expert')) state.packageId = 'lux-drive';
          else if (title.includes('Pre-Drive') || title.includes('Quick Delivery')) state.packageId = 'pre-drive';
        }

        openModal();
      });
    });

    // Close Modal
    const closeBtn = document.getElementById('bookingModalClose');
    const overlay = document.getElementById('bookingModal');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
      });
    }

    // Step Node Navigation (allows jumping back AND forward up to highest reached step)
    document.querySelectorAll('.step-node').forEach((node) => {
      node.addEventListener('click', () => {
        if (state.isConfirmed) return;
        const stepNum = parseInt(node.getAttribute('data-step'));
        if (stepNum <= state.maxReachedStep) {
          state.currentStep = stepNum;
          updateStepUI();
        }
      });
    });

    // Next & Prev Buttons
    const btnNext = document.getElementById('bookingBtnNext');
    const btnPrev = document.getElementById('bookingBtnPrev');

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (validateStep(state.currentStep)) {
          if (state.currentStep < 5) {
            state.currentStep++;
            updateStepUI();
          } else {
            confirmBooking();
          }
        }
      });
    }

    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        if (state.currentStep > 1) {
          state.currentStep--;
          updateStepUI();
        }
      });
    }

    // Package Selection Cards
    document.querySelectorAll('.booking-package-card').forEach((card) => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.booking-package-card').forEach((c) => c.classList.remove('selected'));
        card.classList.add('selected');
        state.packageId = card.getAttribute('data-pkg');
        // Re-populate make dropdown with package-appropriate brands
        if (state.currentStep === 2) populateMakeDropdown();
      });
    });

    // Vehicle Make Dropdown
    document.addEventListener('change', (e) => {
      if (e.target && e.target.id === 'inputMake') {
        state.brand = e.target.value;
        state.model = '';
        const makeId = e.target.options[e.target.selectedIndex]?.dataset?.id;
        populateModelDropdown(state.brand, makeId);
      }
      if (e.target && e.target.id === 'inputModel') {
        state.model = e.target.value;
      }
    });

    // Calendar Navigation Buttons
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');

    if (prevMonthBtn) {
      prevMonthBtn.addEventListener('click', () => {
        state.calendarDate.setMonth(state.calendarDate.getMonth() - 1);
        renderCalendar();
      });
    }

    if (nextMonthBtn) {
      nextMonthBtn.addEventListener('click', () => {
        state.calendarDate.setMonth(state.calendarDate.getMonth() + 1);
        renderCalendar();
      });
    }

    // Time Slot Selection
    document.querySelectorAll('.time-slot-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        if (pill.classList.contains('booked')) return;
        document.querySelectorAll('.time-slot-pill').forEach((p) => p.classList.remove('selected'));
        pill.classList.add('selected');
        state.selectedTime = pill.getAttribute('data-time');
      });
    });

    // Location Type Selection
    document.querySelectorAll('.location-type-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.location-type-btn').forEach((b) => b.classList.remove('selected'));
        btn.classList.add('selected');
        state.locationType = btn.getAttribute('data-type');
      });
    });

    // Promo Code Apply
    const applyPromoBtn = document.getElementById('applyPromoBtn');
    if (applyPromoBtn) {
      applyPromoBtn.addEventListener('click', () => {
        const promoInput = document.getElementById('promoInput');
        const promoStatus = document.getElementById('promoStatus');
        const code = (promoInput.value || '').trim().toUpperCase();

        if (code === 'INSPECT10') {
          state.discount = 0.10;
          state.promoCode = code;
          promoStatus.className = 'promo-status success';
          promoStatus.innerText = '✓ Promo code applied successfully! (10% OFF)';
        } else if (code === 'FIRSTCAR') {
          state.discount = 300;
          state.promoCode = code;
          promoStatus.className = 'promo-status success';
          promoStatus.innerText = '✓ Promo code applied successfully! (₹300 OFF)';
        } else {
          promoStatus.className = 'promo-status error';
          promoStatus.innerText = 'Invalid promo code. Please check and try again.';
        }
        updateSummaryCard();
        updateStepUI();
      });
    }

    // Payment method choices
    document.querySelectorAll('.payment-choice-card').forEach((card) => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.payment-choice-card').forEach((c) => c.classList.remove('selected'));
        card.classList.add('selected');
        state.paymentMethod = card.getAttribute('data-pay');
        updateStepUI();
      });
    });
  }

  // ============================================================
  // FAST INSTANT BANGALORE LOCATIONS DATABASE (0ms Instant Search)
  // ============================================================
  const BANGALORE_POPULAR_PLACES = [
    { name: 'Indiranagar 100ft Road', area: 'Indiranagar', lat: 12.9784, lon: 77.6408 },
    { name: 'Koramangala 5th Block', area: 'Koramangala', lat: 12.9352, lon: 77.6245 },
    { name: 'HSR Layout Sector 1', area: 'HSR Layout', lat: 12.9116, lon: 77.6389 },
    { name: 'HSR Layout Sector 2', area: 'HSR Layout', lat: 12.9121, lon: 77.6445 },
    { name: 'HSR Layout Sector 3', area: 'HSR Layout', lat: 12.9081, lon: 77.6472 },
    { name: 'HSR Layout Sector 6', area: 'HSR Layout', lat: 12.9165, lon: 77.6341 },
    { name: 'Whitefield Main Road', area: 'Whitefield', lat: 12.9698, lon: 77.7499 },
    { name: 'Electronic City Phase 1', area: 'Electronic City', lat: 12.8452, lon: 77.6602 },
    { name: 'Electronic City Phase 2', area: 'Electronic City', lat: 12.8485, lon: 77.6801 },
    { name: 'Bellandur Outer Ring Road', area: 'Bellandur', lat: 12.9279, lon: 77.6784 },
    { name: 'Marathahalli Bridge', area: 'Marathahalli', lat: 12.9592, lon: 77.6974 },
    { name: 'Hebbal Flyover / Esteem Mall', area: 'Hebbal', lat: 13.0359, lon: 77.5970 },
    { name: 'Jayanagar 4th Block', area: 'Jayanagar', lat: 12.9299, lon: 77.5826 },
    { name: 'JP Nagar 6th Phase', area: 'JP Nagar', lat: 12.9068, lon: 77.5855 },
    { name: 'Banashankari 3rd Stage', area: 'Banashankari', lat: 12.9255, lon: 77.5468 },
    { name: 'Rajajinagar 1st Block', area: 'Rajajinagar', lat: 12.9982, lon: 77.5558 },
    { name: 'Malleshwaram 8th Cross', area: 'Malleshwaram', lat: 13.0031, lon: 77.5705 },
    { name: 'Sarjapur Road / Wipro SEZ', area: 'Sarjapur Road', lat: 12.9087, lon: 77.6881 },
    { name: 'Yelahanka New Town', area: 'Yelahanka', lat: 13.0993, lon: 77.5968 },
    { name: 'Kammanahalli Main Road', area: 'Kammanahalli', lat: 13.0093, lon: 77.6377 },
    { name: 'MG Road / Brigade Road', area: 'Central Bangalore', lat: 12.9756, lon: 77.6066 },
    { name: 'Manyata Tech Park', area: 'Nagavara / Hebbal', lat: 13.0454, lon: 77.6200 },
    { name: 'Embassy TechVillage', area: 'Devarabeesanahalli', lat: 12.9268, lon: 77.6923 },
    { name: 'Bagmane Tech Park', area: 'CV Raman Nagar', lat: 12.9806, lon: 77.6631 },
    { name: 'Prestige Shantiniketan', area: 'Whitefield', lat: 12.9877, lon: 77.7371 },
    { name: 'Prestige Lakeside Habitat', area: 'Varthur', lat: 12.9467, lon: 77.7389 },
    { name: 'Mantri Square Mall', area: 'Malleshwaram', lat: 12.9912, lon: 77.5710 },
    { name: 'Phoenix Marketcity', area: 'Mahadevapura', lat: 12.9959, lon: 77.6964 },
    { name: 'Spinny Hub Phoenix Marketcity', area: 'Mahadevapura', lat: 12.9961, lon: 77.6965 },
    { name: 'Cars24 Hub Koramangala', area: 'Koramangala', lat: 12.9340, lon: 77.6230 },
    { name: 'BTM Layout 2nd Stage', area: 'BTM Layout', lat: 12.9166, lon: 77.6101 },
    { name: 'Domlur / EGL Tech Park', area: 'Domlur', lat: 12.9600, lon: 77.6475 },
    { name: 'Kalyan Nagar', area: 'Kalyan Nagar', lat: 13.0238, lon: 77.6433 },
    { name: 'Hennur Road', area: 'Hennur', lat: 13.0267, lon: 77.6322 },
    { name: 'Vidyaranyapura', area: 'Vidyaranyapura', lat: 13.0805, lon: 77.5560 },
    { name: 'Sahakara Nagar', area: 'Sahakara Nagar', lat: 13.0623, lon: 77.5910 },
    { name: 'Kengeri Satellite Town', area: 'Kengeri', lat: 12.9094, lon: 77.4839 },
    { name: 'RR Nagar (Rajarajeshwari Nagar)', area: 'Rajarajeshwari Nagar', lat: 12.9274, lon: 77.5154 },
    { name: 'Vijayanagar', area: 'Vijayanagar', lat: 12.9719, lon: 77.5307 },
    { name: 'Basavanagudi', area: 'Basavanagudi', lat: 12.9406, lon: 77.5738 },
    { name: 'Frazer Town / Pulakeshi Nagar', area: 'Frazer Town', lat: 12.9968, lon: 77.6130 },
    { name: 'Richmond Town', area: 'Richmond Town', lat: 12.9630, lon: 77.6000 },
    { name: 'Ulsoor / Halasuru', area: 'Ulsoor', lat: 12.9781, lon: 77.6234 },
    { name: 'CV Raman Nagar', area: 'CV Raman Nagar', lat: 12.9855, lon: 77.6625 },
    { name: 'HAL Old Airport Road', area: 'HAL', lat: 12.9566, lon: 77.6650 },
    { name: 'Bannerghatta Road / Arekere', area: 'Bannerghatta Road', lat: 12.8876, lon: 77.5960 },
    { name: 'Begur Road', area: 'Begur', lat: 12.8767, lon: 77.6256 },
    { name: 'Singasandra / Hosur Road', area: 'Hosur Road', lat: 12.8821, lon: 77.6433 },
    { name: 'Bommanahalli', area: 'Bommanahalli', lat: 12.9038, lon: 77.6256 },
    { name: 'Silk Board Junction', area: 'Central Silk Board', lat: 12.9172, lon: 77.6228 },
    { name: 'Kudlu Gate', area: 'Hosur Road', lat: 12.8901, lon: 77.6410 },
    { name: 'Chandapura / Attibele', area: 'Chandapura', lat: 12.7933, lon: 77.7020 },
    { name: 'Jigani Industrial Area', area: 'Jigani', lat: 12.7845, lon: 77.6412 },
    { name: 'Peenya Industrial Area', area: 'Peenya', lat: 13.0329, lon: 77.5186 },
    { name: 'Nagarbhavi 2nd Stage', area: 'Nagarbhavi', lat: 12.9602, lon: 77.5102 },
    { name: 'Chandra Layout', area: 'Chandra Layout', lat: 12.9555, lon: 77.5255 },
    { name: 'Mahalakshmi Layout', area: 'Mahalakshmi Layout', lat: 13.0134, lon: 77.5489 },
    { name: 'Vishwapriya Nagar', area: 'Begur / Hosur Road', lat: 12.8750, lon: 77.6180 },
    { name: 'Prabhavathi Elegant', area: 'Belathur / Kadugodi', lat: 12.9980, lon: 77.7610 },
    { name: 'Prabhavathi Comforts', area: 'Begur / Vishwapriya Nagar', lat: 12.8755, lon: 77.6185 }
  ];

  let gmapsSearchDebounce = null;

  function initGmapsAutocomplete() {
    const input = document.getElementById('inputGmapsSearch');
    const suggestionsBox = document.getElementById('gmapsSuggestions');
    const spinner = document.getElementById('gmapsLoadingSpinner');
    if (!input || !suggestionsBox) return;

    input.addEventListener('input', (e) => {
      const originalVal = e.target.value.trim();
      const val = originalVal.toLowerCase();

      // If user pasted Google Maps link directly
      if (val.startsWith('http://') || val.startsWith('https://') || val.includes('maps.google') || val.includes('goo.gl/maps') || val.includes('maps.app.goo.gl')) {
        state.gmapsLink = originalVal;
        showGmapsCapturedBadge('Pasted Google Maps Link', state.gmapsLink);
        suggestionsBox.classList.add('hidden');
        return;
      }

      if (val.length < 2) {
        suggestionsBox.classList.add('hidden');
        return;
      }

      // Auto-capture typed location as a valid Google Maps search URL instantly
      const autoSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(originalVal + ', Bangalore')}`;
      state.gmapsLink = autoSearchUrl;
      showGmapsCapturedBadge(originalVal, autoSearchUrl);

      // 1. INSTANT LOCAL MATCH (0ms)
      const localMatches = BANGALORE_POPULAR_PLACES.filter(p => 
        p.name.toLowerCase().includes(val) || p.area.toLowerCase().includes(val)
      );

      const headerHtml = '<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 12px;background:rgba(255,255,255,0.04);border-bottom:1px solid rgba(255,255,255,0.08);font-size:10.5px;color:var(--text-muted);">' +
        '<span><i class="fas fa-map-marker-alt" style="color:var(--accent-light);margin-right:4px;"></i> Select Landmark / Area</span>' +
        '<button type="button" onclick="event.stopPropagation();document.getElementById(\'gmapsSuggestions\').classList.add(\'hidden\')" style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:4px;color:#cbd5e1;cursor:pointer;font-size:10px;padding:2px 6px;">✕ Close</button>' +
      '</div>';

      let html = '';
      if (localMatches.length > 0) {
        html += localMatches.slice(0, 6).map(p => `
          <div class="gmaps-suggestion-item" onclick="selectGmapsPlace('${p.lat}', '${p.lon}', '${p.name.replace(/'/g, "\\'")}', '${p.area.replace(/'/g, "\\'")}')">
            <i class="fas fa-bolt" style="color:#F59E0B;"></i>
            <div>
              <strong>${p.name}</strong><br>
              <span style="font-size:10.5px;color:var(--text-muted);">${p.area}, Bangalore</span>
            </div>
          </div>
        `).join('');
      }

      suggestionsBox.innerHTML = headerHtml + html;
      if (html) suggestionsBox.classList.remove('hidden');

      // 2. FAST API FETCH FALLBACK (100ms debounce)
      clearTimeout(gmapsSearchDebounce);
      if (spinner) spinner.classList.remove('hidden');

      gmapsSearchDebounce = setTimeout(async () => {
        try {
          // If Ola Maps API Key is provided, query Ola Maps API for Indian places
          if (OLA_MAPS_API_KEY && OLA_MAPS_API_KEY !== 'YOUR_OLA_MAPS_API_KEY') {
            try {
              const olaUrl = `https://api.olamaps.io/places/v1/autocomplete?input=${encodeURIComponent(originalVal)}&api_key=${OLA_MAPS_API_KEY}`;
              const olaRes = await fetch(olaUrl);
              const olaData = await olaRes.json();

              if (spinner) spinner.classList.add('hidden');

              if (olaData && olaData.predictions && olaData.predictions.length > 0) {
                const olaItems = olaData.predictions.map(p => {
                  const mainText = p.structured_formatting?.main_text || p.description.split(',')[0];
                  const secondaryText = p.structured_formatting?.secondary_text || p.description;
                  const lat = p.geometry?.location?.lat || 12.9716;
                  const lng = p.geometry?.location?.lng || 77.5946;
                  return `
                    <div class="gmaps-suggestion-item" onclick="selectGmapsPlace('${lat}', '${lng}', '${mainText.replace(/'/g, "\\'")}', '${secondaryText.replace(/'/g, "\\'")}')">
                      <i class="fas fa-map-pin" style="color:#10B981;"></i>
                      <div>
                        <strong>${mainText}</strong> <span style="font-size:9px;background:#10B981;color:#fff;padding:1px 4px;border-radius:4px;margin-left:4px;">Ola Maps</span><br>
                        <span style="font-size:10.5px;color:var(--text-muted);">${secondaryText}</span>
                      </div>
                    </div>
                  `;
                }).join('');

                suggestionsBox.innerHTML = headerHtml + html + olaItems;
                suggestionsBox.classList.remove('hidden');
                return;
              }
            } catch(e) {
              console.warn('Ola Maps fetch fallback to Photon:', e);
            }
          }

          // Fast Photon API (sub-100ms response)
          const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(originalVal + ' Bangalore')}&lat=12.9716&lon=77.5946&limit=4`;
          const res = await fetch(url);
          const data = await res.json();

          if (spinner) spinner.classList.add('hidden');

          if (data && data.features && data.features.length > 0) {
            const apiItems = data.features.map(f => {
              const props = f.properties || {};
              const coords = f.geometry?.coordinates || [77.5946, 12.9716];
              const name = props.name || props.street || originalVal;
              const area = props.city || props.district || props.suburb || 'Bangalore';
              return `
                <div class="gmaps-suggestion-item" onclick="selectGmapsPlace('${coords[1]}', '${coords[0]}', '${name.replace(/'/g, "\\'")}', '${area.replace(/'/g, "\\'")}')">
                  <i class="fas fa-map-marker-alt" style="color:#6366F1;"></i>
                  <div>
                    <strong>${name}</strong><br>
                    <span style="font-size:10.5px;color:var(--text-muted);">${area}, Bangalore</span>
                  </div>
                </div>
              `;
            }).join('');

            suggestionsBox.innerHTML = headerHtml + html + apiItems;
            suggestionsBox.classList.remove('hidden');
          }
        } catch(err) {
          if (spinner) spinner.classList.add('hidden');
        }
      }, 100);
    });

    // Re-open if input already has text and is focused
    input.addEventListener('focus', () => {
      if (input.value.trim().length >= 2 && suggestionsBox.children.length > 1) {
        suggestionsBox.classList.remove('hidden');
      }
    });

    // Dismiss on Escape key
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        suggestionsBox.classList.add('hidden');
      }
    });

    // Also auto-capture when user types in Area or Address fields directly
    const areaIn = document.getElementById('inputArea');
    const addrIn = document.getElementById('inputAddress');
    const updateFromTextInputs = () => {
      const a = (areaIn?.value || '').trim();
      const b = (addrIn?.value || '').trim();
      const combined = (b || a) ? `${b} ${a}`.trim() : '';
      if (combined && !state.gmapsLink) {
        const searchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(combined + ', Bangalore')}`;
        state.gmapsLink = searchUrl;
        showGmapsCapturedBadge(a || 'Entered Address', searchUrl);
      }
    };
    if (areaIn) areaIn.addEventListener('input', updateFromTextInputs);
    if (addrIn) addrIn.addEventListener('input', updateFromTextInputs);

    // Hide suggestions immediately when focusing any other input, textarea, select, or button
    const hideSuggestions = () => {
      if (suggestionsBox && !suggestionsBox.classList.contains('hidden')) {
        suggestionsBox.classList.add('hidden');
      }
    };

    if (areaIn) areaIn.addEventListener('focus', hideSuggestions);
    if (addrIn) addrIn.addEventListener('focus', hideSuggestions);
    document.querySelectorAll('#bookingModal input, #bookingModal textarea, #bookingModal select, #bookingModal button').forEach(el => {
      if (el !== input) {
        el.addEventListener('focus', hideSuggestions);
      }
    });

    // Close suggestions if clicked / tapped anywhere outside
    document.addEventListener('pointerdown', (evt) => {
      if (!input.contains(evt.target) && !suggestionsBox.contains(evt.target)) {
        hideSuggestions();
      }
    }, true);

    document.addEventListener('click', (evt) => {
      if (!input.contains(evt.target) && !suggestionsBox.contains(evt.target)) {
        hideSuggestions();
      }
    }, true);

    window.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') hideSuggestions();
    });
  }

  window.selectGmapsPlace = (lat, lon, mainName, fullAddress) => {
    const areaInput = document.getElementById('inputArea');
    const addressInput = document.getElementById('inputAddress');
    const gmapsSearchInput = document.getElementById('inputGmapsSearch');
    const suggestionsBox = document.getElementById('gmapsSuggestions');

    if (gmapsSearchInput) gmapsSearchInput.value = mainName;
    if (areaInput) areaInput.value = fullAddress || mainName;
    if (addressInput) {
      if (!addressInput.value || addressInput.value.length < 5) {
        addressInput.value = `${mainName}, ${fullAddress}, Bangalore`;
      }
    }

    const mapLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
    state.gmapsLink = mapLink;
    showGmapsCapturedBadge(mainName, mapLink);

    if (suggestionsBox) suggestionsBox.classList.add('hidden');
  };

  // LIGHTNING FAST GPS DETECTION
  window.detectGPSLocation = (fromModal = false) => {
    const btn = document.getElementById('btnDetectLocation');
    const areaInput = document.getElementById('inputArea');
    const addressInput = document.getElementById('inputAddress');
    const gmapsSearchInput = document.getElementById('inputGmapsSearch');

    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    if (btn && !fromModal) btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Locating...';

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const mapLink = `https://www.google.com/maps?q=${lat},${lon}`;
        state.gmapsLink = mapLink;

        // Fast parallel reverse-geocode fetch
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
          const data = await res.json();
          const placeName = data.address?.suburb || data.address?.neighbourhood || data.address?.road || 'Bangalore Location';
          const fullAddr = data.display_name ? data.display_name.split(',').slice(0, 4).join(',') : `Lat: ${lat.toFixed(4)}, Lon: ${lon.toFixed(4)}`;

          if (gmapsSearchInput) gmapsSearchInput.value = placeName;
          if (areaInput) areaInput.value = placeName;
          if (addressInput) addressInput.value = fullAddr;

          showGmapsCapturedBadge(`GPS: ${placeName}`, mapLink);
        } catch(e) {
          showGmapsCapturedBadge(`GPS Coordinates (${lat.toFixed(4)}, ${lon.toFixed(4)})`, mapLink);
        }

        if (btn) btn.innerHTML = '<i class="fas fa-check" style="color:#10B981;"></i> GPS Located';
      },
      (err) => {
        console.warn('GPS detection failed:', err);
        if (btn) btn.innerHTML = '<i class="fas fa-crosshairs"></i> GPS Locate';
        const aIn = document.getElementById('inputArea');
        if (aIn && aIn.value) {
          const searchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(aIn.value + ', Bangalore')}`;
          state.gmapsLink = searchUrl;
          showGmapsCapturedBadge(aIn.value, searchUrl);
        }
      },
      { enableHighAccuracy: true, timeout: 5000 }
    );
  };

  function showGmapsCapturedBadge(text, link) {
    const badge = document.getElementById('gmapsCapturedBadge');
    const textEl = document.getElementById('gmapsCapturedText');
    const linkEl = document.getElementById('gmapsCapturedLink');

    if (badge && textEl && linkEl) {
      textEl.innerText = text;
      linkEl.href = link;
      badge.classList.remove('hidden');
    }
  }

  function openModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
      modal.classList.add('active');
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
      syncPackageSelection();
      populateMakeDropdown();
      const badge = document.getElementById('gmapsCapturedBadge');
      if (badge && !state.gmapsLink) badge.classList.add('hidden');
    }
  }
  window.openBookingModal = openModal;

  function closeModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
      document.body.style.overflow = 'auto';

      if (state.isConfirmed) {
        state.isConfirmed = false;
        state.currentStep = 1;
        state.maxReachedStep = 1;
        document.querySelectorAll('.step-node').forEach((node) => {
          node.style.pointerEvents = 'auto';
          node.style.opacity = '1';
        });
        const footer = document.querySelector('.booking-modal-footer');
        if (footer) footer.style.display = 'flex';
        updateStepUI();
      }
    }
  }

  function syncPackageSelection() {
    document.querySelectorAll('.booking-package-card').forEach((c) => {
      if (c.getAttribute('data-pkg') === state.packageId) {
        c.classList.add('selected');
      } else {
        c.classList.remove('selected');
      }
    });
  }

  // STEP VALIDATION
  function validateStep(step) {
    if (step === 1) {
      if (!state.packageId) {
        alert('Please select an inspection package.');
        return false;
      }
    } else if (step === 2) {
      state.brand = document.getElementById('inputMake')?.value || '';
      state.model = document.getElementById('inputModel')?.value || '';
      state.year = document.getElementById('inputYear')?.value || '2022';
      state.fuel = document.getElementById('inputFuel')?.value || 'Petrol';
      state.registration = document.getElementById('inputReg')?.value.trim() || '';

      if (!state.brand) {
        alert('Please select your Vehicle Make.');
        return false;
      }
      if (!state.model) {
        alert('Please select your Vehicle Model.');
        return false;
      }
    } else if (step === 3) {
      if (!state.selectedDate) {
        alert('Please select an inspection date from the calendar.');
        return false;
      }
      if (!state.selectedTime) {
        alert('Please select a preferred time slot.');
        return false;
      }
    } else if (step === 4) {
      state.customerName = document.getElementById('inputName')?.value.trim() || '';
      state.customerPhone = document.getElementById('inputPhone')?.value.trim() || '';
      state.customerEmail = document.getElementById('inputEmail')?.value.trim() || '';
      state.address = document.getElementById('inputAddress')?.value.trim() || '';
      state.area = document.getElementById('inputArea')?.value.trim() || '';

      if (!state.customerName || !state.customerPhone || !state.address) {
        alert('Please fill out your Name, Phone Number, and Inspection Address.');
        return false;
      }

      // ── Consent validation ──────────────────────────────────────────────
      const consentTC = document.getElementById('consentTC')?.checked;
      const consentPP = document.getElementById('consentPP')?.checked;
      const errEl    = document.getElementById('consentErrorMsg');
      const badgeEl  = document.getElementById('consentStatusBadge');

      if (!consentTC || !consentPP) {
        if (errEl)   errEl.style.display   = 'flex';
        if (badgeEl) badgeEl.style.display = 'none';
        // Highlight unchecked boxes
        if (!consentTC) document.getElementById('consentTCLabel').style.borderColor = 'rgba(239,68,68,0.7)';
        if (!consentPP) document.getElementById('consentPPLabel').style.borderColor = 'rgba(239,68,68,0.7)';
        document.getElementById('consentSection')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return false;
      }
      if (errEl)   errEl.style.display   = 'none';

      // Record timestamp of consent
      state.consentTimestamp = new Date().toISOString();
      state.consentTC        = true;
      state.consentPP        = true;
    }
    return true;
  }

  // UPDATE STEP UI
  function updateStepUI() {
    state.maxReachedStep = Math.max(state.maxReachedStep || 1, state.currentStep);

    document.querySelectorAll('.booking-step-content').forEach((el) => el.classList.remove('active'));

    const currentEl = document.getElementById(`stepContent${state.currentStep}`);
    if (currentEl) currentEl.classList.add('active');

    // When entering step 2, refresh the make dropdown based on selected package
    if (state.currentStep === 2) {
      populateMakeDropdown();
      const luxNotice = document.getElementById('luxury-notice');
      if (luxNotice) luxNotice.style.display = LUXURY_PACKAGES.includes(state.packageId) ? 'block' : 'none';
    }

    // Reset scroll position to top of modal body on step change
    const modalBody = document.querySelector('.booking-modal-body');
    if (modalBody) modalBody.scrollTop = 0;

    document.querySelectorAll('.step-node').forEach((node) => {
      const stepNum = parseInt(node.getAttribute('data-step'));
      node.classList.remove('active', 'completed');
      if (stepNum === state.currentStep) {
        node.classList.add('active');
      } else if (stepNum <= state.maxReachedStep) {
        node.classList.add('completed');
      }
    });

    const fillPercent = ((state.currentStep - 1) / 4) * 100;
    const fillEl = document.getElementById('bookingProgressFill');
    if (fillEl) fillEl.style.width = `${fillPercent}%`;

    const btnPrev = document.getElementById('bookingBtnPrev');
    const btnNext = document.getElementById('bookingBtnNext');

    if (btnPrev) {
      btnPrev.style.display = state.currentStep === 1 ? 'none' : 'flex';
    }

    if (btnNext) {
      if (state.currentStep === 4) {
        btnNext.innerHTML = 'Review & Book <i class="fas fa-chevron-right"></i>';
      } else if (state.currentStep === 5) {
        const pkg = PACKAGES[state.packageId] || PACKAGES['luxury-expert'];
        let basePrice = pkg.price;
        let discountAmt = 0;
        if (state.discount > 0 && state.discount <= 1) {
          discountAmt = Math.round(basePrice * state.discount);
        } else if (state.discount > 1) {
          discountAmt = state.discount;
        }
        const totalPrice = Math.max(0, basePrice - discountAmt);

        const isToken = state.paymentMethod === 'token-199' || state.paymentMethod.startsWith('token');
        const payNowAmt = isToken ? Math.min(199, totalPrice) : totalPrice;

        if (payNowAmt === 0) {
          btnNext.innerHTML = `Confirm Booking (₹0) <i class="fas fa-check-circle"></i>`;
        } else if (isToken && payNowAmt === 199) {
          btnNext.innerHTML = `Pay ₹199 Token & Confirm <i class="fas fa-lock"></i>`;
        } else {
          btnNext.innerHTML = `Pay ₹${payNowAmt.toLocaleString('en-IN')} & Confirm <i class="fas fa-lock"></i>`;
        }
      } else {
        btnNext.innerHTML = 'Continue <i class="fas fa-chevron-right"></i>';
      }
    }

    if (state.currentStep === 5) {
      updateSummaryCard();
    }
  }

  // RENDER DYNAMIC CALENDAR
  function renderCalendar() {
    const monthYearTitle = document.getElementById('calendarMonthYear');
    const daysGrid = document.getElementById('calendarDaysGrid');
    if (!daysGrid) return;

    daysGrid.innerHTML = '';

    const year = state.calendarDate.getFullYear();
    const month = state.calendarDate.getMonth();

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    if (monthYearTitle) {
      monthYearTitle.innerText = `${monthNames[month]} ${year}`;
    }

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < firstDay; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.className = 'calendar-day-cell disabled';
      daysGrid.appendChild(emptyCell);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const cellDate = new Date(year, month, d);
      cellDate.setHours(0, 0, 0, 0);

      const cell = document.createElement('div');
      cell.className = 'calendar-day-cell';
      cell.innerText = d;

      if (cellDate < today) {
        cell.classList.add('disabled');
      } else {
        if (cellDate.getTime() === today.getTime()) {
          cell.classList.add('today');
        }

        if (state.selectedDate) {
          const selDateWithoutTime = new Date(state.selectedDate);
          selDateWithoutTime.setHours(0, 0, 0, 0);
          if (cellDate.getTime() === selDateWithoutTime.getTime()) {
            cell.classList.add('selected');
          }
        }

        cell.addEventListener('click', async () => {
          document.querySelectorAll('.calendar-day-cell').forEach((c) => c.classList.remove('selected'));
          cell.classList.add('selected');
          state.selectedDate = cellDate;
          await updateSlotAvailability(cellDate);
        });
      }

      daysGrid.appendChild(cell);
    }

    if (state.selectedDate) {
      updateSlotAvailability(state.selectedDate);
    }
  }

  function getLocalDateString(d) {
    if (!d) return '';
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  function getSlotStartHour(slotTime) {
    if (!slotTime) return 0;
    if (slotTime.startsWith('9:00 AM')) return 9;
    if (slotTime.startsWith('11:00 AM')) return 11;
    if (slotTime.startsWith('1:00 PM')) return 13;
    if (slotTime.startsWith('3:00 PM')) return 15;
    if (slotTime.startsWith('5:00 PM')) return 17;
    if (slotTime.startsWith('7:00 PM')) return 19;
    return 0;
  }

  // CHECK REAL-TIME TIME SLOT AVAILABILITY FROM SUPABASE & LOCAL CACHE
  async function updateSlotAvailability(selectedDate) {
    if (!selectedDate) return;
    const dateStr = getLocalDateString(selectedDate);
    const now = new Date();
    const todayStr = getLocalDateString(now);
    const isToday = dateStr === todayStr;
    const currentHour = now.getHours();

    const pills = document.querySelectorAll('.time-slot-pill');
    if (!pills || pills.length === 0) return;

    let bookedTimes = new Set();

    // ── 1. Fetch confirmed bookings from Supabase (Single Source of Truth) ──────
    // IMPORTANT: Only statuses that mean the slot is truly reserved are included.
    // 'pending' alone (user started booking but never paid/completed) must NOT block slots.
    // 'confirmed'       = website booking after successful payment
    // 'assigned'        = admin booking with inspector allocated
    // 'inspection_done' = inspection completed, report pending
    // 'report_ready'    = report generated
    // 'completed'       = fully done
    // 'pending_balance' = token paid, balance due at site
    const BLOCKING_STATUSES = ['confirmed', 'assigned', 'inspection_done', 'report_ready', 'completed', 'pending_balance'];

    if (supabaseClient) {
      try {
        const { data, error } = await supabaseClient
          .from('bookings')
          .select('inspection_time, status')
          .eq('inspection_date', dateStr)
          .in('status', BLOCKING_STATUSES);   // ← only real confirmed bookings block slots

        if (!error && data) {
          data.forEach(b => {
            if (b.inspection_time) {
              bookedTimes.add(b.inspection_time.trim()); // exact slot string e.g. "9:00 AM - 11:00 AM"
            }
          });
        }
      } catch(e) {
        console.warn('Error checking slot availability from Supabase:', e);
      }
    } else {
      // ── 2. Fallback: local session storage (only if Supabase disconnected) ───
      // Session storage is only written after a CONFIRMED booking completes.
      try {
        const localBooked = JSON.parse(sessionStorage.getItem('ic_local_booked') || '[]');
        localBooked.forEach(lb => {
          if (lb.date === dateStr && lb.time) {
            bookedTimes.add(lb.time.trim());
          }
        });
      } catch(e) {}
    }

    let selectedStillValid = false;

    pills.forEach((pill) => {
      const slotTime = pill.getAttribute('data-time')?.trim();
      const subSpan = pill.querySelector('.sub');
      const startHour = getSlotStartHour(slotTime);

      // Check if slot has already passed today
      const isPast = isToday && (currentHour >= startHour);

      // ── EXACT MATCH ONLY ─────────────────────────────────────────────────────
      // We store and compare the full slot string e.g. "9:00 AM - 11:00 AM".
      // No partial/substring matching — that was causing adjacent slots to appear booked.
      const isBooked = bookedTimes.has(slotTime);

      if (isPast) {
        pill.classList.add('booked', 'disabled');
        pill.classList.remove('selected');
        if (subSpan) subSpan.innerHTML = '<span style="color:#666;font-weight:600;">Passed</span>';
      } else if (isBooked) {
        pill.classList.add('booked');
        pill.classList.remove('selected');
        if (subSpan) subSpan.innerHTML = '<span style="color:#ef4444;font-weight:700;">Booked</span>';
      } else {
        pill.classList.remove('booked', 'disabled');
        const isNight = slotTime && slotTime.startsWith('7:00 PM');
        if (subSpan) subSpan.innerText = isNight ? '(On Demand Night)' : 'Available';

        if (state.selectedTime === slotTime) {
          pill.classList.add('selected');
          selectedStillValid = true;
        }
      }
    });

    // If currently selected slot is booked, pick the first available non-booked slot
    if (!selectedStillValid) {
      const firstAvail = Array.from(pills).find(p => !p.classList.contains('booked'));
      if (firstAvail) {
        pills.forEach(p => p.classList.remove('selected'));
        firstAvail.classList.add('selected');
        state.selectedTime = firstAvail.getAttribute('data-time');
      } else {
        state.selectedTime = '';
      }
    }
  }

  // UPDATE SUMMARY CARD (STEP 5)
  function updateSummaryCard() {
    const pkg = PACKAGES[state.packageId] || PACKAGES['luxury-expert'];
    let basePrice = pkg.price;
    let discountAmount = 0;

    if (state.discount > 0 && state.discount <= 1) {
      discountAmount = Math.round(basePrice * state.discount);
    } else if (state.discount > 1) {
      discountAmount = state.discount;
    }

    const finalTotal = Math.max(0, basePrice - discountAmount);

    const dateStr = state.selectedDate ? state.selectedDate.toLocaleDateString('en-IN', {
      weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'
    }) : 'Not selected';

    document.getElementById('sumPkgName').innerText = pkg.name;
    document.getElementById('sumVehicle').innerText = `${state.brand} ${state.model} (${state.year})`;
    document.getElementById('sumDateTime').innerText = `${dateStr} @ ${state.selectedTime}`;
    document.getElementById('sumLocation').innerText = `${state.area || 'Bangalore'} (${state.locationType})`;

    document.getElementById('sumBasePrice').innerText = `₹${basePrice.toLocaleString('en-IN')}`;

    const gmapsRow = document.getElementById('sumGmapsRow');
    const gmapsLinkEl = document.getElementById('sumGmapsLink');
    if (gmapsRow && gmapsLinkEl) {
      if (state.gmapsLink) {
        gmapsRow.style.display = 'flex';
        gmapsLinkEl.href = state.gmapsLink;
      } else {
        gmapsRow.style.display = 'none';
      }
    }

    const discRow = document.getElementById('sumDiscountRow');
    if (discRow) {
      if (discountAmount > 0) {
        discRow.style.display = 'flex';
        document.getElementById('sumDiscountVal').innerText = `- ₹${discountAmount.toLocaleString('en-IN')}`;
      } else {
        discRow.style.display = 'none';
      }
    }

    document.getElementById('sumTotalPrice').innerText = `₹${finalTotal.toLocaleString('en-IN')}`;

    const isToken = state.paymentMethod === 'token-199' || state.paymentMethod.startsWith('token');
    const payNowVal = isToken ? Math.min(199, finalTotal) : finalTotal;
    const balanceVal = Math.max(0, finalTotal - payNowVal);

    const payNowLabelEl = document.getElementById('sumPayNowLabel');
    const payNowValEl = document.getElementById('sumPayNowVal');
    const balanceLabelEl = document.getElementById('sumBalanceLabel');
    const balanceValEl = document.getElementById('sumBalanceVal');

    if (payNowLabelEl) payNowLabelEl.innerText = isToken ? 'Pay Now Advance' : 'Pay Now (Full Payment)';
    if (payNowValEl) payNowValEl.innerText = `₹${payNowVal.toLocaleString('en-IN')}`;
    if (balanceLabelEl) balanceLabelEl.innerText = isToken ? 'Pay at Site (Before Inspection)' : 'Pay at Site';
    if (balanceValEl) balanceValEl.innerText = isToken ? `₹${balanceVal.toLocaleString('en-IN')}` : '₹0 (Fully Paid)';
  }

  // CONFIRM BOOKING — Triggers Razorpay online payment (Token ₹199 vs Full Payment)
  async function confirmBooking() {
    const pkg = PACKAGES[state.packageId] || PACKAGES['luxury-expert'];
    let basePrice = pkg.price;
    let discountAmt = 0;
    if (state.discount > 0 && state.discount <= 1) discountAmt = Math.round(basePrice * state.discount);
    else if (state.discount > 1) discountAmt = state.discount;
    const totalPrice = Math.max(0, basePrice - discountAmt);

    const isToken = state.paymentMethod === 'token-199' || state.paymentMethod.startsWith('token');
    const chargedAmount = isToken ? Math.min(199, totalPrice) : totalPrice;
    const balanceAmount = Math.max(0, totalPrice - chargedAmount);

    // Bypass Razorpay if 100% OFF coupon applied
    if (chargedAmount === 0 || totalPrice === 0) {
      await finalizeBooking({
        paymentStatus: 'paid',
        paymentId: 'TEST_FREE_' + Math.floor(100000 + Math.random() * 900000),
        paymentMethod: `100% OFF Coupon (${state.promoCode || 'TEST1002026'})`,
        chargedAmount: 0,
        balanceAmount: 0
      });
      return;
    }

    if (typeof Razorpay === 'undefined') {
      alert('Razorpay Checkout SDK is loading. Please check your internet connection and try again.');
      return;
    }

    const RAZORPAY_KEY = window.RAZORPAY_KEY_ID || 'rzp_live_TJRDVu6qlB1ZbO';

    const options = {
      key: RAZORPAY_KEY,
      amount: chargedAmount * 100, // Amount in paise (₹199 = 19900 paise)
      currency: 'INR',
      name: 'InspectCar',
      description: isToken ? `₹199 Booking Token Advance (${pkg.name})` : `Full Inspection Fee (${pkg.name})`,
      image: 'images/Logo.webp',
      prefill: {
        name: state.customerName || '',
        email: state.customerEmail || '',
        contact: state.customerPhone || ''
      },
      theme: {
        color: '#6366f1'
      },
      handler: async function (response) {
        const paymentId = response.razorpay_payment_id || ('pay_' + Math.floor(100000 + Math.random() * 900000));
        await finalizeBooking({
          paymentStatus: isToken ? 'token_paid' : 'paid',
          paymentId: paymentId,
          paymentMethod: isToken ? 'Razorpay Token (₹199)' : 'Razorpay Full Payment',
          chargedAmount: chargedAmount,
          balanceAmount: balanceAmount
        });
      },
      modal: {
        ondismiss: function() {
          state.isConfirmed = false;
          console.log('Razorpay modal closed by user');
        }
      }
    };

    try {
      const rzp = new Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error('Razorpay popup error:', err);
      alert('Could not open Razorpay checkout popup. Please try again.');
    }
  }

  // FINALIZE BOOKING — Save to Supabase & Render Confirmation Screen
  async function finalizeBooking(paymentInfo) {
    state.isConfirmed = true;
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    state.bookingRef = `IC-${new Date().getFullYear()}-${randomNum}`;

    document.querySelectorAll('.step-node').forEach((node) => {
      node.style.pointerEvents = 'none';
      node.style.opacity = '0.5';
    });

    const footer = document.querySelector('.booking-modal-footer');
    if (footer) footer.style.display = 'none';

    const step5 = document.getElementById('stepContent5');
    if (!step5) return;

    step5.innerHTML = `
      <div style="text-align:center;padding:40px 20px;">
        <div style="font-size:36px;margin-bottom:16px;color:var(--accent-3);"><i class="fas fa-spinner fa-spin"></i></div>
        <h4 style="color:#fff;margin-bottom:8px;">Saving your booking...</h4>
        <p style="color:var(--text-muted);font-size:13px;">Please wait a moment</p>
      </div>
    `;

    const pkg = PACKAGES[state.packageId] || PACKAGES['luxury-expert'];

    let basePrice = pkg.price;
    let discountAmt = 0;
    if (state.discount > 0 && state.discount < 1) discountAmt = Math.round(basePrice * state.discount);
    else if (state.discount >= 1) discountAmt = state.discount;
    const totalPrice = Math.max(0, basePrice - discountAmt);

    const inspDate = getLocalDateString(state.selectedDate || new Date());

    // Save to local session cache for instant slot blocking
    try {
      const localBooked = JSON.parse(sessionStorage.getItem('ic_local_booked') || '[]');
      localBooked.push({ date: inspDate, time: state.selectedTime });
      sessionStorage.setItem('ic_local_booked', JSON.stringify(localBooked));
    } catch(e) {}

    const fullAddrWithMap = state.address + (state.gmapsLink ? `\n📍 Maps: ${state.gmapsLink}` : '');
    const notesWithPayment = (state.gmapsLink ? `Google Maps Link: ${state.gmapsLink}` : '') +
      ` | Charged: ₹${paymentInfo.chargedAmount} | Balance Due at Site: ₹${paymentInfo.balanceAmount} | Razorpay Ref: ${paymentInfo.paymentId}`;

    if (supabaseClient) {
      try {
        const { error } = await supabaseClient
          .from('bookings')
          .insert({
            booking_ref:     state.bookingRef,
            customer_name:   state.customerName,
            customer_phone:  state.customerPhone,
            customer_email:  state.customerEmail || null,
            vehicle_brand:   state.brand,
            vehicle_model:   state.model,
            vehicle_year:    state.year,
            vehicle_fuel:    state.fuel,
            vehicle_reg:     state.registration || null,
            package_name:    pkg.name,
            base_price:      basePrice,
            discount:        discountAmt,
            total_price:     totalPrice,
            promo_code:      state.promoCode || null,
            inspection_date: inspDate,
            inspection_time: state.selectedTime,
            location_type:   state.locationType,
            address:         fullAddrWithMap,
            area:            state.area,
            notes:           notesWithPayment,
            payment_method:  paymentInfo.paymentMethod,
            payment_status:  paymentInfo.paymentStatus,
            // ✅ 'confirmed' = slot is truly reserved. Only set here, after payment succeeds.
            // Unfinished flows never call finalizeBooking(), so they never write any row.
            status:          'confirmed',
            source:          'website'
          });
        if (error) console.error('Supabase insert error:', error);
      } catch (err) {
        console.warn('Supabase save failed, WhatsApp still works:', err);
      }

      // ── Consent Log: separate table entry keyed by booking_ref & customer ──
      try {
        const consentPayload = {
          booking_ref:           state.bookingRef,
          customer_name:         state.customerName,
          customer_phone:        state.customerPhone,
          customer_email:        state.customerEmail || null,
          terms_agreed:          state.consentTC === true,
          privacy_agreed:        state.consentPP === true,
          consent_timestamp_ist: state.consentTimestamp,          // ISO 8601 UTC
          consent_timestamp_utc: state.consentTimestamp,
          ip_hint:               null,                            // enriched server-side if needed
          user_agent:            navigator.userAgent.substring(0, 200)
        };
        const { error: consentErr } = await supabaseClient
          .from('consent_logs')
          .insert(consentPayload);
        if (consentErr) console.warn('Consent log insert error:', consentErr);
      } catch (cErr) {
        console.warn('Consent log save failed:', cErr);
      }
    }

    const dateStr = state.selectedDate
      ? state.selectedDate.toLocaleDateString('en-IN', { weekday:'long', month:'long', day:'numeric', year:'numeric' })
      : '';

    // 1. AUTOMATED EMAIL NOTIFICATION to info@inspectcar.in & Customer
    try {
      fetch('https://formsubmit.co/ajax/info@inspectcar.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `🚗 NEW BOOKING CONFIRMED: ${state.bookingRef} - ${state.customerName} (${state.brand} ${state.model})`,
          _replyto: state.customerEmail || 'info@inspectcar.in',
          _cc: state.customerEmail || undefined,
          "Booking Ref": state.bookingRef,
          "Customer Name": state.customerName,
          "Customer Phone": state.customerPhone,
          "Customer Email": state.customerEmail || 'Not Provided',
          "Vehicle": `${state.brand} ${state.model} (${state.year} ${state.fuel})`,
          "Vehicle Reg": state.registration || 'N/A',
          "Inspection Package": pkg.name,
          "Inspection Date": dateStr,
          "Time Slot": state.selectedTime,
          "Doorstep Address": `${state.address}, ${state.area}, Bangalore`,
          "Google Maps Link": state.gmapsLink || 'N/A',
          "Payment Status": paymentInfo.paymentStatus === 'token_paid' ? '₹199 Advance Paid (Token)' : '100% Paid Online',
          "Razorpay Payment Ref": paymentInfo.paymentId,
          "Advance Paid Now": `₹${paymentInfo.chargedAmount}`,
          "Balance Payable at Site": `₹${paymentInfo.balanceAmount}`
        })
      }).catch(e => console.warn('Email dispatch warning:', e));
    } catch (e) {}

    // 2. WHATSAPP NOTIFICATION TEXTS (Customer & Admin)
    const customerPhoneClean = (state.customerPhone || '').replace(/\D/g, '').slice(-10);
    
    const customerWaText = encodeURIComponent(
      `Hi ${state.customerName}! 👋\n\n` +
      `Your InspectCar Vehicle Inspection is *CONFIRMED*! 🎉\n\n` +
      `📌 *Booking Ref:* ${state.bookingRef}\n` +
      `🚗 *Vehicle:* ${state.brand} ${state.model} (${state.year})\n` +
      `📅 *Date & Slot:* ${dateStr} @ ${state.selectedTime}\n` +
      `📍 *Location:* ${state.address}, ${state.area}, Bangalore\n` +
      (state.gmapsLink ? `🗺️ *Google Maps:* ${state.gmapsLink}\n` : '') +
      `📦 *Package:* ${pkg.name}\n` +
      `💳 *Advance Paid:* ₹${paymentInfo.chargedAmount} (Ref: ${paymentInfo.paymentId})\n` +
      (isToken ? `💰 *Balance Due at Site:* ₹${paymentInfo.balanceAmount}\n` : `💰 *Balance Due at Site:* ₹0 (Fully Paid)\n`) +
      `\nOur certified technician will arrive on time. Thank you for choosing InspectCar! 🚗🔍`
    );
    const customerWaUrl = `https://wa.me/91${customerPhoneClean}?text=${customerWaText}`;

    const adminWaText = encodeURIComponent(
      `🚨 *NEW BOOKING RECEIVED!*\n\n` +
      `📌 *Booking Ref:* ${state.bookingRef}\n` +
      `👤 *Customer:* ${state.customerName} (${state.customerPhone})\n` +
      (state.customerEmail ? `📧 *Email:* ${state.customerEmail}\n` : '') +
      `🚗 *Vehicle:* ${state.brand} ${state.model} (${state.year})\n` +
      `📅 *Date & Slot:* ${dateStr} @ ${state.selectedTime}\n` +
      `📍 *Location:* ${state.address}, ${state.area}\n` +
      (state.gmapsLink ? `🗺️ *Maps:* ${state.gmapsLink}\n` : '') +
      `📦 *Package:* ${pkg.name}\n` +
      `💳 *Payment:* ${paymentInfo.paymentMethod} (Ref: ${paymentInfo.paymentId})\n` +
      `💰 *Balance Due:* ₹${paymentInfo.balanceAmount}\n\n` +
      `Please assign inspector in Admin Dashboard!`
    );
    const adminWaUrl = `https://wa.me/919900368006?text=${adminWaText}`;

    const paymentBadgeHtml = isToken
      ? `<div style="margin-top:10px;padding:8px 14px;background:rgba(56,189,248,0.15);border:1px solid rgba(56,189,248,0.3);border-radius:10px;color:#38bdf8;font-size:12px;font-weight:700;display:inline-flex;align-items:center;gap:6px;"><i class="fas fa-check-circle"></i> ₹199 Token Paid via Razorpay (Ref: ${paymentInfo.paymentId}) &nbsp;·&nbsp; Balance ₹${paymentInfo.balanceAmount} Due at Site</div>`
      : `<div style="margin-top:10px;padding:8px 14px;background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.3);border-radius:10px;color:#34d399;font-size:12px;font-weight:700;display:inline-flex;align-items:center;gap:6px;"><i class="fas fa-check-circle"></i> Full Payment Verified via Razorpay (Ref: ${paymentInfo.paymentId})</div>`;

    step5.innerHTML = `
      <div class="booking-success-view">
        <div class="success-icon-badge"><i class="fas fa-check"></i></div>
        <h3 style="font-size:22px;font-weight:800;color:#fff;margin-bottom:6px;">Inspection Scheduled!</h3>
        <p style="color:var(--text-muted);font-size:13.5px;max-width:500px;margin:0 auto 10px;">
          We will arrive at your location on <strong>${dateStr}</strong> at <strong>${state.selectedTime}</strong>.
        </p>
        ${paymentBadgeHtml}
        
        <div style="margin-top:10px;padding:6px 12px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;color:#34d399;font-size:11.5px;display:inline-flex;align-items:center;gap:6px;">
          <i class="fas fa-envelope-open-text"></i> Email confirmation dispatched to <strong>info@inspectcar.in</strong> ${state.customerEmail ? '& customer' : ''}
        </div>

        <div class="ref-code-box" style="margin-top:12px;">REF CODE: ${state.bookingRef}</div>
        
        <div style="background:#171722;border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:16px;text-align:left;max-width:500px;margin:0 auto 18px;">
          <div style="font-size:11.5px;color:var(--accent-3);font-weight:700;text-transform:uppercase;margin-bottom:10px;">Booking Summary</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:13px;">
            <div><span style="color:var(--text-faint);">Customer:</span><br><strong style="color:#fff;">${state.customerName}</strong></div>
            <div><span style="color:var(--text-faint);">Phone:</span><br><strong style="color:#fff;">${state.customerPhone}</strong></div>
            <div><span style="color:var(--text-faint);">Vehicle:</span><br><strong style="color:#fff;">${state.brand} ${state.model}</strong></div>
            <div><span style="color:var(--text-faint);">Balance at Site:</span><br><strong style="color:${isToken ? '#fbbf24' : '#34d399'};">₹${paymentInfo.balanceAmount}</strong></div>
          </div>
        </div>

        <div class="success-actions-row" style="display:flex;flex-wrap:wrap;gap:10px;justify-center;max-width:500px;margin:0 auto;">
          <a href="${customerWaUrl}" target="_blank" class="btn-whatsapp-confirm" style="flex:1;min-width:200px;background:#25D366;color:#fff;padding:10px 16px;border-radius:10px;font-weight:700;font-size:12.5px;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;gap:6px;">
            <i class="fab fa-whatsapp"></i> Send Customer Receipt
          </a>
          <a href="${adminWaUrl}" target="_blank" class="btn-whatsapp-confirm" style="flex:1;min-width:200px;background:#128C7E;color:#fff;padding:10px 16px;border-radius:10px;font-weight:700;font-size:12.5px;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;gap:6px;">
            <i class="fab fa-whatsapp"></i> Send Admin Alert (+91 9900368006)
          </a>
        </div>
      </div>
    `;
  }

})();

// ── Global helper: update consent checkbox visual feedback ────────────────────
window.updateConsentUI = function(type) {
  const consentTC = document.getElementById('consentTC')?.checked;
  const consentPP = document.getElementById('consentPP')?.checked;
  const tcLabel   = document.getElementById('consentTCLabel');
  const ppLabel   = document.getElementById('consentPPLabel');
  const badge     = document.getElementById('consentStatusBadge');
  const errEl     = document.getElementById('consentErrorMsg');

  // Reset border highlights
  if (tcLabel) tcLabel.style.borderColor = consentTC ? 'rgba(52,211,153,0.55)' : 'rgba(255,255,255,0.08)';
  if (ppLabel) ppLabel.style.borderColor = consentPP ? 'rgba(52,211,153,0.55)' : 'rgba(255,255,255,0.08)';

  // Show success badge when both ticked
  if (consentTC && consentPP) {
    if (badge)  badge.style.display  = 'flex';
    if (errEl)  errEl.style.display  = 'none';
  } else {
    if (badge)  badge.style.display  = 'none';
  }
};
