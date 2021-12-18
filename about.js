var social1=document.querySelector("#social1");
var social2=document.querySelector("#social2");
var social3=document.querySelector("#social3");
var social4=document.querySelector("#social4");
var social5=document.querySelector("#social5");

var serv=document.querySelector("#service");
var root=document.querySelector("#roots");
var process=document.querySelector("#process");
var science=document.querySelector("#science");
var init=document.querySelector("#init");


function colorManage(elem){
if(elem==root){
    elem.style.backgroundColor="teal";
    elem.style.color="white";
    serv.style.backgroundColor="white";
    serv.style.color="teal";
    process.style.backgroundColor="white";
    process.style.color="teal";
    science.style.backgroundColor="white";
    science.style.color="teal";
    init.style.backgroundColor="white";
    init.style.color="teal";
}
else if(elem==serv){
    elem.style.backgroundColor="teal";
    elem.style.color="white";
    root.style.backgroundColor="white";
    root.style.color="teal";
    process.style.backgroundColor="white";
    process.style.color="teal";
    science.style.backgroundColor="white";
    science.style.color="teal";
    init.style.backgroundColor="white";
    init.style.color="teal";
}
else if(elem==process){
    elem.style.backgroundColor="teal";
    elem.style.color="white";
    root.style.backgroundColor="white";
    root.style.color="teal";
    serv.style.backgroundColor="white";
    serv.style.color="teal";
    science.style.backgroundColor="white";
    science.style.color="teal";
    init.style.backgroundColor="white";
    init.style.color="teal";
}
else if(elem==science){
    elem.style.backgroundColor="teal";
    elem.style.color="white";
    root.style.backgroundColor="white";
    root.style.color="teal";
    process.style.backgroundColor="white";
    process.style.color="teal";
    process.style.backgroundColor="white";
    process.style.color="teal";
    init.style.backgroundColor="white";
    init.style.color="teal";
}
else if(elem==init){
    elem.style.backgroundColor="teal";
    elem.style.color="white";
    root.style.backgroundColor="white";
    root.style.color="teal";
    process.style.backgroundColor="white";
    process.style.color="teal";
    science.style.backgroundColor="white";
    science.style.color="teal";
    serv.style.backgroundColor="white";
    serv.style.color="teal";
}


}

document.querySelector("#service").addEventListener("click",function(){
    social1.textContent="";
    social2.textContent="";
    social3.textContent="";
     social4.textContent="";
     social5.textContent="";
     colorManage(serv);

     var div1=document.createElement("div");
     var img1=document.createElement("img");
     img1.setAttribute("src","");
     img1.style.height="100%"
     div1.append(img1);

     var div2=document.createElement("div");
     var h1=document.createElement("h2");
     h1.textContent="For Humble Beginnings";
     var p1=document.createElement("p");
     p1.textContent="While riding through the forests of Burma, our founder, Mr. M. Manal, saw a villager pacify a restless elephant by feeding it the root of the plant Rauwolfia serpentina.";
     var p2=document.createElement("p");
     p2.textContent="Fascinated by the plant's effect on the elephant, he returned home to India to seek scientific evidence for why this particular plant would have such a beneficial, calming effect. Young Manal's mother gave him her bangles to sell so he could pursue his work, and Himalaya was born.";
     var p3=document.createElement("p");
     p3.textContent="Once he fully understood the science behind this special botanical, Mr. Manal bought a hand-operated, tablet-compressing machine and began his work. At night, his shoulders would ache from producing a few hundred tablets, one small tablet at a time. But his hard work paid off. This remarkable plant would later become Serpina, the world’s first anti-hypertensive drug in 1934.";
     var p4=document.createElement("p");
     p4.textContent="We remain in awe of the man who began our company, and the grandfather of our current CEO, Nabeel Manal. Himalaya’s legacy has always been one of researching nature and using the tools of modern science to develop and produce Ayurveda-based, pharmaceutical-grade herbal medicine products. And today, that legacy continues.";
     var p5=document.createElement("p");
     p5.textContent="Mr. Manal had a vision of helping people be well. Today, Himalaya Herbal Healthcare has turned a time-honored herbal tradition into a complete range of contemporary, proprietary formulas and single herbs dedicated to making the world well one person at a time.";
     div2.append(h1,p1,p2,p3,p4,p5);
     social1.append(div1,div2);


     var div3=document.createElement("div");
     var h2=document.createElement("h2");
     h2.textContent="The Himalaya Legacy Now Spans Over 90 Years";
     var p6=document.createElement("p");
     p6.textContent="Founded in 1930, the Himalaya legacy now spans over 90 years, stretching from one man, to his son, to his grandson. From our humble beginnings in India, our products are now offered in over 100 countries, yet we’re still family owned.";
     var p7=document.createElement("p");
     p7.textContent="Himalaya offers a full line of clinically-studied herbal formulations, certified USDA organic Single herbs, and a full line of body care products. Integrating the principles of traditional medicine with modern science, Himalaya is a worldwide pioneer in the field of scientifically validated herbal healthcare.";
     var p8=document.createElement("p");
     p8.textContent="Himalaya's North American LEED® Gold-Certified eco-friendly corporate office and warehouse facility are located in Sugar Land, Texas, a community neighboring Houston.";
     div3.append(h2,p6,p7,p8);

     var div4=document.createElement("div");
     var img2=document.createElement("img");
     img2.style.height="70%";
     img2.setAttribute("src","");
     div4.append(img2);
     social2.append(div3,div4);
    });

document.querySelector("#roots").addEventListener("click",function(){
     social1.textContent="";
     social2.textContent="";
     social3.textContent="";
     social4.textContent="";
     social5.textContent="";

     
     var img=document.createElement("img");
    // img.setAttribute("src",)
     
    img.setAttribute("src" , "https://i.shgcdn.com/f95290db-d02e-433c-9564-4766788d684c/-/format/auto/-/preview/3000x3000/-/quality/lighter/")
     img.setAttribute("id" , "rootsimg")
    var div=document.createElement("div");
     var h=document.createElement("h2");
      h.textContent=document.textContent="Our Roots";
     var p1=document.createElement("p");
     p1.textContent="The herbs used in Himalaya Herbal Healthcare's scientific product line are also used in the world's oldest traditional system of medicine, Ayurveda, which dates back over 4,000 years." 
     var p2=document.createElement("p");
     p2.textContent="The word Ayurveda comes from the Sanskrit root words ayur, meaning “life” and veda, meaning to know. Ayurveda literally means to know life, or in the language of today, the science of life."
     var p3=document.createElement("p");
     p3.textContent="Ayurveda had a profound, far-reaching influence on Traditional Chinese Medicine and the healthcare systems of many other countries and cultures that followed. Today, thanks to the dedicated efforts of Himalaya’s doctors and scientists, it’s been proven effective through scientific validation."
var p4=document.createElement("p");
     p4.textContent="Ayurveda acknowledges there are five elements that make up the universe and the human body; earth, water fire, air and space. It seeks to bring the constellation and characteristics of the three body types defined by those elements – the vata, pitta and kapha – back into balance through proper diet, herbal treatment, and emotional well-being."
var p5=document.createElement("p");
p5.textContent="We’re proud of the ancient roots and our modern branches that allow us to continue unlocking the powerful healing benefits of Ayurveda, but our formulas are science-based and appropriate for all body types. They require no Ayurvedic knowledge to be used successfully."
     div.append(h,p1,p2,p3,p4,p5);
     social1.append(img,div);
    colorManage(root);
});



document.querySelector("#process").addEventListener("click",function(){
    social1.textContent="";
    social2.textContent="";
    social3.textContent="";
     social4.textContent="";
     social5.textContent="";
    colorManage(process);


    var div1=document.createElement("div");
    var img1=document.createElement("img");
     img1.setAttribute("src","https://i.shgcdn.com/a802e384-7312-4d13-bda1-8859e1afaecf/-/format/auto/-/preview/3000x3000/-/quality/lighter/");
     img1.setAttribute("class" , "processimg");
     div1.append(img1);
     var div2=document.createElement("div");
     var h1=document.createElement("h2");
      h1.textContent=document.textContent="Purity and Efficacy";
     var p1=document.createElement("p");
     p1.textContent="The complexity and timing of the entire seed-to-shelf process for Himalaya and for the plants themselves, is highlighted by three important mandates: purity, efficacy, and batch-to-batch consistency."
     var p2=document.createElement("p");
p2.textContent="We know the success of traditional plant medicine is based on several integral parts that extend from the most advanced agricultural research and practices, to extraction methodologies, to formulating approaches and dosage strategies."
var p3=document.createElement("p");
p3.textContent="To accomplish all of this, Himalaya maintains total control over the farming, harvesting, research, manufacturing, and distribution of all our products."
div2.append(h1,p1,p2,p3);
social1.append(div1,div2);

var div3=document.createElement("div");
var h2=document.createElement("h2");
h2.textContent="Our Farms";
var p4=document.createElement("p");
p4.textContent="Himalaya's herbs are grown on over 1,000 acres of farmland through fair trade, farming partnerships. Herbs are also sustainably wildcrafted on over 5,000 acres."
var p5=document.createElement("p");
p5.textContent="Farms are located in regions most suitable to the individual herb so that the best possible quality and potency are achieved in the harvest. Just as one wine grape has more character and flavor when grown in a very specific region, the plants used in healthcare often perform best when they’re grown and harvested in their own unique native soil."
var p6=document.createElement("p");
p6.textContent="Himalaya chooses farm lands based on soil fertility, suitability and quality, visiting the selected land first to ensure the land is free from soil and water erosion, free from pollution and away from industrial zones, free from municipal waste and the flow of rain water from neighboring fields."
var p7=document.createElement("p");
p7.textContent="Farmers are trained in preparing the land, through to post-harvest management of the herbs, and even in proper drying, packaging, storing and labeling."
var p8=document.createElement("p");
p8.textContent="Himalaya’s farmers use only authenticated starting materials; viable seeds with a good germination percentage. A respective Package of Practices (POP) assures adherence to quality, sustainability and careful environmental stewardship at all times."
var p9=document.createElement("p");
p9.textContent="Farmers are trained on earth-friendly organic practices, soil bed preparation, proper irrigation, fertilization and sustainable harvesting, crop rotation, cover crop cultivation and organic soil enrichment. No pesticides are allowed to be used."
var p10=document.createElement("p");
p10.textContent="Careful safety measures are put in place for handling threatened plant populations, and farmers are continually trained on the Good Cultivation Practices specific to each herb. In addition, farmers are trained on Good Agriculture Collection Practices as well."
var p11=document.createElement("p");
p11.textContent="In addition to initial training, two residential workshops are conducted per year, and supervisors visit the farmer’s field regularly to check for compliance in areas such as proper crop management, no chemical usage, no child labor, and appropriate labor hours for adults. Violations do not occur."
var p12=document.createElement("p");
p12.textContent="Himalaya’s agricultural supervisory teams visit farms quarterly, but the frequency of visits may increase depending on the individual needs of the farmer. Himalaya’s inspectors and trainers include our own people with Masters Degrees in botany, MBAs in agri-business management, along with agricultural scientists from reputed universities."
div3.append(h2,p4,p5,p6,p7,p8,p9,p10,p11,p12);
var div4=document.createElement("div");
var img2=document.createElement("img");
img2.setAttribute("src","https://i.shgcdn.com/6fdef74e-1e57-4bd4-8f3f-617132184feb/-/format/auto/-/preview/3000x3000/-/quality/lighter/");
img2.setAttribute("class" , "processimg" )
div4.append(img2);
social2.append(div3,div4);

var div5=document.createElement("div");
var img3=document.createElement("img");
img3.setAttribute("src","https://i.shgcdn.com/1ccc967d-5c31-4ca5-8ceb-3a0c95177b71/-/format/auto/-/preview/3000x3000/-/quality/lighter/");
img3.setAttribute("class" , "processimg")
div5.append(img3);
var div6=document.createElement("div");
var h3=document.createElement("h2");
h3.textContent="Our Manufacturing";
var p13=document.createElement("p");
p13.textContent="In March 2001, Himalaya was granted a Good Manufacturing Practices (GMP) certificate, issued by the Licensing Authority, Directorate of Indian Systems of Medicine, Bangalore, India. Himalaya is the first Ayurvedic facility in India to receive GMP certification."
var p14=document.createElement("p");
p14.textContent="We have also been granted Good Laboratory Practice (GLP) certification. A GLP certification is granted to manufacturing companies that adhere to the toxicity guidelines in nonclinical safety studies. The certification is granted by the National Good Laboratory Practice (GLP) Compliance Monitoring Authority, Department of Science and Technology, Government of India."
var p15=document.createElement("p");
p15.textContent="Only 14 institutions in India have been granted this certificate, and Himalaya is the first herbal company to join their ranks."
div6.append(h3,p13,p14,p15);
social3.append(div5,div6);

});


document.querySelector("#science").addEventListener("click",function(){
    social1.textContent="";
    social2.textContent="";
    social3.textContent="";
     social4.textContent="";
     social5.textContent="";
    colorManage(science);


    var div1=document.createElement("div");
    var img1=document.createElement("img");
    img1.setAttribute("src","https://i.shgcdn.com/a094b44f-0f48-4abf-b25b-549315cc3d98/-/format/auto/-/preview/3000x3000/-/quality/lighter/");
img1.setAttribute("class" , "scienceimg")
    div1.append(img1);
    var div2=document.createElement("div");
    var h1=document.createElement("h2");
    h1.textContent="Our Science";
    var p1=document.createElement("p");
    p1.textContent="Himalaya's core interest has always been to ensure the health benefits of our herbal formulas and standalone solo herbs with product-specific, double-blind, placebo-controlled human clinical trials on all of our products.";
    var p2=document.createElement("p");
    p2.textContent="Our commitment to Ayurvedic principles, and research to produce natural, safe, and effective health products is driven by our soul mission, which is to help individual people maintain a healthy, long, and high-quality of life. We like to think of ourselves as providing solutions for you, which helps make our world well, one person at a time.";
    var p3=document.createElement("p");
    p3.textContent="We take pride in the fact that our formulas undergo years of primary research before we offer them to you. Our commitment to ensure we have product-specific science on hand before we launch a product into the marketplace is exceptional within the natural products industry.";
    var p4=document.createElement("p");
    p4.textContent="Himalaya has conducted over 1,200 clinical studies, many of which have been published in numerous, highly-regarded medical journals including The European Journal of Pharmacology, Phytotherapy Research, The Indian Journal of Clinical Practice, Australian Journal of Medical Herbalism, and JAMA, India.";
    div2.append(h1,p1,p2,p3,p4);
    social1.append(div1,div2);


    var div3=document.createElement("div");
    var h2=document.createElement("h2");
    h2.textContent="Our Distribution";
    var p5=document.createElement("p");
    p5.textContent="After being grown, manufactured and packaged in India, finished Himalaya products are shipped to our North American corporate office, warehouse and distribution center located in Sugar Land, Texas.";
    var p6=document.createElement("p");
    p6.textContent="Here we maintain state-of-the-art storage and shipping processes in climate-controlled environments until our products make their way to our retailers, and then to your home.";
    div3.append(h2,p5,p6);
    var div4=document.createElement("div");
    var img2=document.createElement("img");
    img2.setAttribute("src","https://i.shgcdn.com/5a1a59af-3931-4d16-bff2-004468e44137/-/format/auto/-/preview/3000x3000/-/quality/lighter/");
    img2.setAttribute("class" , "scienceimg")
    div4.append(img2);
    social2.append(div3,div4);


});


document.querySelector("#init").addEventListener("click",function(){
    social1.textContent="";
    social2.textContent="";
    social3.textContent="";
     social4.textContent="";
     social5.textContent="";
     colorManage(init);
    
     
     var div1=document.createElement("div");
     var img1=document.createElement("img");
     img1.setAttribute("src","https://i.shgcdn.com/6288998b-545b-4de3-946e-6317b6fe72f6/-/format/auto/-/preview/3000x3000/-/quality/lighter/");
    img1.setAttribute("class" , "initimg")
     div1.append(img1);

     var div2=document.createElement("div");
     var h1=document.createElement("h2");
     h1.textContent="Commitment to Farmers";
     var p1=document.createElement("p");
     p1.textContent="Himalaya works one-on-one with farmers and through non-governmental organizations to help bring poorer farming communities a link to the marketplace. Through fair trade cooperative agreements, our goal is to help economically empower small and marginal farmers so they can further their livelihood.";
     var p2=document.createElement("p");
     p2.textContent="Himalaya’s fair trade practices assure farmers are paid a minimum of 15-20% higher than the actual cost of cultivation. In addition to favorable wages, other benefits to the farmers include an assured market for their crops, an assured price and income (we protect them from the ups and downs of the market), and the costs for their required certifications, packaging and transportation are borne by us, not them.";
     hr1=document.createElement("hr");
     div2.append(h1,p1,p2);
     social1.append(div1,div2);

     
     var div3=document.createElement("div");
     var h2=document.createElement("h2");
     h2.textContent="Partnership with Vitamin Angels";
     var p3=document.createElement("p");
     p3.textContent="Himalaya continues to be a proud supporter of Vitamin Angels, a worldwide non-profit organization helping to save the lives and eyesight of nutrient deficient children. Vitamin Angels reduces child mortality by connecting infants and children under five with vital nutrients.";
     var p4=document.createElement("p");
     p4.textContent="It only takes 50¢ to reach one child twice a year with enough vitamin A to reduce childhood mortality by 24% and ensure a child's eyesight. Vitamin Angels gives children a chance for a brighter future, and Himalaya is proud to be an ongoing supporter of their work."
     div3.append(h2,p3,p4);

     var div4=document.createElement("div");
     var img2=document.createElement("img");
     img2.setAttribute("src","https://i.shgcdn.com/68587d5b-0706-4d21-b1f1-59e35de255e8/-/format/auto/-/preview/3000x3000/-/quality/lighter/");
    img2.setAttribute("class" , "initimg")
     div4.append(img2);
     social2.append(div3,div4);

     var div5=document.createElement("div");
     var img3=document.createElement("img");
     img3.setAttribute("src","https://i.shgcdn.com/f86febe0-9c1e-466f-b189-842f750669b3/-/format/auto/-/preview/3000x3000/-/quality/lighter/");
     img3.setAttribute("class" , "initimg")
     div5.append(img3);

     var div6=document.createElement("div");
     var h3=document.createElement("h2");
     h3.textContent="Trees for Life";
     var p5=document.createElement("p");
     p5.textContent="Himalaya has been planting trees in the Western Ghats of India since 2011. The Western Ghats is identified as a biodiversity hotspot by UNESCO, the United Nations Educational, Scientific and Cultural Organization.";
     var p6=document.createElement("p");
     p6.textContent="To date, we have planted 750,000 trees, covering 900 acres in partnership with a local non-government organization, the Society for Environment and Biodiversity Conservation. Himalaya supports the planting of a mix of fruit, fodder, endemic, medicinal and other trees that support the local ecology and biodiversity.";
     var p7=document.createElement("p");
     p7.textContent="Some of the medicinal trees planted include Ashwagandha, Arjuna, Amla and Hirada. The program also supports the planting of fruit trees such as mango, papaya, banana and cashew nut, which generate income to local farmers in the program and serve as supplementary nutrition. In addition, we have also planted Abutilon ranadei, a native plant that is critically endangered.";
     div6.append(h3,p5,p6,p7);
     social3.append(div5,div6);


     var div7=document.createElement("div");
     var h4=document.createElement("h2");
     h4.textContent="Certification for Environmental Management";
     var p8=document.createElement("p");
     p8.textContent="Himalaya has taken several steps to conserve water, power and reduce pollution to meet National Quality Assurance (NQA) guidelines. The most significant achievement has been setting up a water treatment plant and sourcing water with low Total Dissolved Solids (TDS) externally. This has reduced Himalaya’s water consumption by as much as 10,000 liters a day. ";
     var p9=document.createElement("p");
     p9.textContent="Himalaya has been awarded ISO-14001:2004 certification, the most recognized standard globally, for environment management. The certification is granted by National Quality Assurance (NQA), the UK's largest established certification body.";
     div7.append(h4,p8,p9);

     var div8=document.createElement("div");
     var img4=document.createElement("img");
     img4.setAttribute("src","https://i.shgcdn.com/6fdef74e-1e57-4bd4-8f3f-617132184feb/-/format/auto/-/preview/3000x3000/-/quality/lighter/");
     img4.setAttribute("class" , "initimg")
     div8.append(img4);
     social4.append(div7,div8);


     var div9=document.createElement("div");
     var img5=document.createElement("img");
     img5.setAttribute("src","https://i.shgcdn.com/87244901-21ea-4e12-91a6-08edec634fe5/-/format/auto/-/preview/3000x3000/-/quality/lighter/");
     img5.setAttribute("class" , "initimg")
     div9.append(img5);    
     
     var div10=document.createElement("div");
     var h5=document.createElement("h2");
     h5.textContent="Autism Hope Alliance";
     var p10=document.createElement("p");
     p10.textContent="Himalaya Herbal Healthcare is a proud Autism Approved® sponsor of the Autism Hope Alliance. Himalaya’s continued charitable donation helps support families facing an autism diagnosis. The Autism Hope Alliance embodies hope for families through education, financial support and volunteerism. They are also the first nonprofit foundation for Autism to emerge from the natural foods industry.";
     div10.append(h5,p10);
     social5.append(div9,div10);


    });