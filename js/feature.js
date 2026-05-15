gsap.registerPlugin(ScrollTrigger);
window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('scrolled',scrollY>30),{passive:true});

// HERO
const htl=gsap.timeline({delay:.1});
htl.fromTo('#fEy',{opacity:0,y:14},{opacity:1,y:0,duration:.65,ease:'power3.out'})
   .fromTo('#fH1',{opacity:0,y:36},{opacity:1,y:0,duration:1,ease:'power3.out'},'-=.4')
   .fromTo('#fSub',{opacity:0,y:22},{opacity:1,y:0,duration:.8,ease:'power3.out'},'-=.6')
   .fromTo('#fBtns',{opacity:0,y:16},{opacity:1,y:0,duration:.65,ease:'power3.out'},'-=.5')
   .fromTo('#fHR',{opacity:0,x:48,scale:.94},{opacity:1,x:0,scale:1,duration:1.1,ease:'back.out(1.2)'},'-=.9');

// CHAOS
gsap.fromTo('#fChaosHd',{opacity:0,y:24},{opacity:1,y:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:'#fChaos',start:'top 78%',once:true}});
gsap.fromTo('#fChaosCenter',{opacity:0,scale:.8},{opacity:1,scale:1,duration:1.1,ease:'back.out(1.3)',scrollTrigger:{trigger:'#fChaos',start:'top 75%',once:true}});
gsap.fromTo('.f-chaos-col.left .f-prob',{opacity:0,x:-40},{opacity:1,x:0,stagger:.1,duration:.7,ease:'power3.out',scrollTrigger:{trigger:'#fChaos',start:'top 72%',once:true}});
gsap.fromTo('.f-chaos-col.right .f-prob',{opacity:0,x:40},{opacity:1,x:0,stagger:.1,duration:.7,ease:'power3.out',scrollTrigger:{trigger:'#fChaos',start:'top 72%',once:true}});

// FEATURES SECTION HEADER
gsap.fromTo('#fFeaturesHd',{opacity:0,y:28},{opacity:1,y:0,duration:.95,ease:'power3.out',scrollTrigger:{trigger:'#fFeaturesHd',start:'top 80%',once:true}});

// EACH FEATURE SECTION
[0,1,2,3,4,5,6,7,8,9].forEach(i=>{
  if(!document.getElementById('fS'+i)) return;
  const isAlt=i%2===1;
  gsap.fromTo('#fC'+i,{opacity:0,x:isAlt?32:-32},{opacity:1,x:0,duration:.95,ease:'power3.out',scrollTrigger:{trigger:'#fS'+i,start:'top 82%',once:true}});
  gsap.fromTo('#fV'+i,{opacity:0,x:isAlt?-32:32,scale:.97},{opacity:1,x:0,scale:1,duration:.95,ease:'power3.out',delay:.1,scrollTrigger:{trigger:'#fS'+i,start:'top 82%',once:true}});
  gsap.fromTo('#fS'+i+' .f-bullet',{opacity:0,x:isAlt?20:-20},{opacity:1,x:0,stagger:.1,duration:.65,ease:'power3.out',delay:.25,scrollTrigger:{trigger:'#fS'+i,start:'top 80%',once:true}});
});

// NUMBERS
gsap.fromTo('.f-num',{opacity:0,y:28,scale:.97},{opacity:1,y:0,scale:1,stagger:.12,duration:.7,ease:'power3.out',scrollTrigger:{trigger:'#fNums',start:'top 82%',once:true}});

// MANIFESTO
gsap.fromTo('#fManiHd',{opacity:0,y:24},{opacity:1,y:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:'#fMani',start:'top 78%',once:true}});
gsap.fromTo('.f-mani-item',{opacity:0,x:-32},{opacity:1,x:0,stagger:.15,duration:.8,ease:'power3.out',scrollTrigger:{trigger:'.f-mani-items',start:'top 82%',once:true}});
gsap.fromTo('#fManiImg',{opacity:0,scale:.88,x:36},{opacity:1,scale:1,x:0,duration:1.1,ease:'power3.out',scrollTrigger:{trigger:'#fMani',start:'top 75%',once:true}});

// CTA
gsap.fromTo('#fCta',{opacity:0,y:24},{opacity:1,y:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:'#fCta',start:'top 82%',once:true}});

// DASHBOARD tilt
document.querySelectorAll('.f-db').forEach(d=>{
  d.addEventListener('mousemove',e=>{const r=d.getBoundingClientRect(),tx=(e.clientX-r.left-r.width/2)*.025,ty=(e.clientY-r.top-r.height/2)*.025;gsap.to(d,{rotateX:-ty,rotateY:tx,duration:.25,ease:'power2.out'})});
  d.addEventListener('mouseleave',()=>gsap.to(d,{rotateX:0,rotateY:0,duration:.55,ease:'elastic.out(1,.5)'}));
});

// Magnetic
document.querySelectorAll('.btn-pri,.n-demo').forEach(btn=>{
  btn.addEventListener('mousemove',e=>{const r=btn.getBoundingClientRect(),dx=(e.clientX-r.left-r.width/2)*.18,dy=(e.clientY-r.top-r.height/2)*.18;gsap.to(btn,{x:dx,y:dy,duration:.3,ease:'power2.out'})});
  btn.addEventListener('mouseleave',()=>gsap.to(btn,{x:0,y:0,duration:.55,ease:'elastic.out(1,.5)'}));
});
