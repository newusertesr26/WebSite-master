var $mainNav = $(".dropdown-menu"); function toggleDarkLight() { var t = document.getElementById("mainBody"), o = "dark-mode" == t.className ? "light-mode" : "dark-mode"; localStorage.setItem("codezee-theme-preference", o), t.className = o } $(".dropdown-menu a").on("click", function () { $mainNav.hide(), setTimeout(function () { $mainNav.show() }, 100) }), window.addEventListener("hashchange", function (t) { let o = t.newURL.split("#"); "Ecommerce" == o[1] ? window.scrollTo(window.scrollX, window.scrollY - 350) : "Enterprise" == o[1] ? window.scrollTo(window.scrollX, window.scrollY - 350) : "Content" == o[1] ? window.scrollTo(window.scrollX, window.scrollY - 350) : "Mobile" == o[1] ? window.scrollTo(window.scrollX, window.scrollY - 350) : "ios" == o[1] ? window.scrollTo(window.scrollX, window.scrollY - 350) : "Android" == o[1] ? window.scrollTo(window.scrollX, window.scrollY - 350) : "Platform" == o[1] ? window.scrollTo(window.scrollX, window.scrollY - 350) : "Research" == o[1] ? window.scrollTo(window.scrollX, window.scrollY - 300) : "Application" == o[1] ? window.scrollTo(window.scrollX, window.scrollY - 270) : "Game" == o[1] ? window.scrollTo(window.scrollX, window.scrollY - 270) : "Layout" == o[1] && window.scrollTo(window.scrollX, window.scrollY - 270) }); var owl, TxtType = function (t, o, e) { this.toRotate = o, this.el = t, this.loopNum = 0, this.period = parseInt(e, 5) || 2e3, this.txt = "", this.tick(), this.isDeleting = !1 }; TxtType.prototype.tick = function () { var t = this.loopNum % this.toRotate.length, o = this.toRotate[t]; this.isDeleting ? this.txt = o.substring(0, this.txt.length - 1) : this.txt = o.substring(0, this.txt.length + 1), this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>"; var e = this, i = 200 - 100 * Math.random(); this.isDeleting && (i /= 2), this.isDeleting || this.txt !== o ? this.isDeleting && "" === this.txt && (this.isDeleting = !1, this.loopNum++, i = 500) : (i = this.period, this.isDeleting = !0), setTimeout(function () { e.tick() }, i) }, window.onload = function () { for (var t = document.getElementsByClassName("typewrite"), o = 0; o < t.length; o++) { var e = t[o].getAttribute("data-type"), i = t[o].getAttribute("data-period"); e && new TxtType(t[o], JSON.parse(e), i) } var n = document.createElement("style"); n.type = "text/css", n.innerHTML = ".typewrite > .wrap { border-right: 6px solid #7E75E4;}", document.body.appendChild(n) }, $(window).on("scroll", function () { $(document).scrollTop() > 50 ? $("header").addClass("shrink") : $("header").removeClass("shrink") }), (owl = $("#slider1")).owlCarousel({ loop: !0, margin: 15, autoplayTimeout: 5e3, smartSpeed: 450, dots: !1, nav: !0, navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"], responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 }, 1200: { items: 1 } } }), (owl = $("#slider2")).owlCarousel({ loop: !0, margin: 15, autoplay: !0, slideTransition: "linear", autoplaySpeed: 2e3, infinite: !0, dots: !1, nav: !0, navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"], responsive: { 0: { items: 1 }, 600: { items: 2 }, 1200: { items: 4 }, 1550: { items: 6 } } }), $(".stat-number").each(function () { var t = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0; $(this).prop("Counter", 0).animate({ Counter: $(this).text() }, { duration: 5e3, step: function (o) { $(this).text(parseFloat(o).toFixed(t)) } }) }), $(document).ready(function () { $(".popup-youtube").magnificPopup({ type: "iframe" }) }); var wow = new WOW({ animateClass: "animated", offset: 100, callback: function (t) { console.log("WOW: animating <" + t.tagName.toLowerCase() + ">") } }).init(); function myFunction() { var t = document.getElementById("dots"), o = document.getElementById("more"), e = document.getElementById("myBtn"); "none" === t.style.display ? (t.style.display = "inline", e.innerHTML = "Read more", o.style.display = "none") : (t.style.display = "none", e.innerHTML = "Read less", o.style.display = "inline") } function scrollToDiv(t = "") { $("html, body").animate({ scrollTop: $(t).offset().top - 120 }, 1e3) } function goToByScroll(t, o) { $("html,body").animate({ scrollTop: $("#" + t).offset().top - o }, "slow") } $(window).scroll(function () { $(this).scrollTop() >= 50 ? $("#return-to-top").fadeIn(200) : $("#return-to-top").fadeOut(200) }), $("#return-to-top").click(function () { $("body,html").animate({ scrollTop: 0 }, 1500) }), jQuery(function (t) { var o = window.location.href; t(".navbar-nav a").each(function () { this.href === o && t(this).addClass("active") }) }), jQuery(function (t) { var o = window.location.href; t(".dropdown").each(function () { this.href === o && t(this).addClass("active") }) }), $(".nav-item .nav-link:not(.nav-item.dropdown .nav-link), .dropdown-item").click(function () { $(".dropdown-item.active").removeClass("active") }), $(document).on("change", ".up", function () { for (var t = [], o = $(this).get(0).files.length, e = 0; e < $(this).get(0).files.length; ++e)t.push($(this).get(0).files[e].name); if (o > 2) { t.join(", "); $(this).closest(".form-group").find(".form-control").attr("value", o + " files selected") } else $(this).closest(".form-group").find(".form-control").attr("value", t) });
$(".chatbot").click(function () {
    $(".chat-box").addClass("active");
});
$(".arrow-btn").click(function () {
    $(".chat-box").removeClass("active");
});
var isQuickContactStart = false;
$(document).ready(function () {
    $("#img-learn-more").click(function () {
        if (!isQuickContactStart) {
            var emailId = $("#email-quick-contact").val();
            if (!emailId) {
                showToastMessage("error", "Please enter email id.");
                return false;
            }
            if (!ValidateEmail(emailId)) {
                showToastMessage("error", "Please enter valid email id.");
                return false;
            }
            $("#btn-quick-loader").show();
            $("#img-learn-more").hide();
            isQuickContactStart = true;
            submitQuickContact(emailId).then((data) => {
                if (data == 1) {
                    showToastMessage("success", "Thanks for contacting us. We will reach you soon..");
                    $("#email-quick-contact").val("");
                }
                else if (data == -2) {
                    showToastMessage("error", "Please enter email id.");
                }
                else {
                    showToastMessage("error", "Error while submiting your query.");
                }
                hideLoader();
            }).catch((error) => {
                showToastMessage("error", "Error while submiting your query.");
                hideLoader();
            });
        }
    });
});

submitQuickContact = async (emailId) => {
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
    try {
        const fetchResponse = await fetch("/quick-contact-send-email?emailId=" + emailId, settings);
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
        return e;
    }
}

function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }
    return (false)
}

function hideLoader() {
    $("#btn-quick-loader").hide();
    $("#img-learn-more").show();
    isQuickContactStart = false;
}