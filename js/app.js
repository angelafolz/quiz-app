var qCount = 0;
var numCorrect = 0;
var clicked = false;

function Question(ask, answer1, answer2, answer3, correctAns, information, source, image) {
	this.ask = ask;
	this.answer1 = answer1;
	this.answer2 = answer2;
	this.answer3 = answer3;
	this.answer4 = "none of the above";
	this.correctAns = correctAns;
	this.information = information;
	this.source = source;
	this.image = image;
}

var question1 = new Question(
	"If the Sun were replaced by a black hole of equal mass,...",
	"the planets of the solar system would immediately be sucked into it.",
	"the orbits of the planets would be essentially unaffected.",
	"the inner planets of the solar system would be slowly pulled into the black hole over a long period of time.",
	2,
	"Black holes, contrary to their common image, have the same gravitational effects as any other equal mass in their place. They will draw objects nearby towards them, just as any other planetary body does, except at very close distances. If, for example, the Sun were replaced by a black hole of equal mass, the orbits of the planets would be essentially unaffected. A black hole can act like a &ldquo;cosmic vacuum cleaner&rdquo; and pull a substantial inflow of matter, but only if the star it forms from is already having a similar effect on surrounding matter.",
	"http://en.wikipedia.org/wiki/List_of_common_misconceptions#Astronomy",
	"images/sygnux-black-hole.jpg"
	);
var question2 = new Question(
	"Humans evolved from",
	"chimpanzees",
	"bonobos",
	"a species of extinct chimpanzee",
	3,
	"Humans did not evolve from either of the living species of chimpanzees. Humans did however evolve from a species of extinct chimpanzee, dubbed Pan prior. The two modern species (common chimpanzees and bonobos) are humans' closest living relatives and some anthropologists and primatologists accept that humans are not only descended from an extinct chimpanzee, but are themselves a species of living chimpanzee. The most recent common ancestor of humans and the other living chimpanzees lived between 5 and 8 million years ago. Finds of the 4.4 million year old Ardipithecus indicate the ancestor was a moderately competent bipedal walker rather than a knucklewalker, and was small and rather more long limbed than a chimpanzee and with a shorter snout. Contrary to the idea of chimpanzees as &ldquo;primitive&rdquo;, they too have evolved since the split, becoming larger, more aggressive and more capable climbers. Together with the other apes, humans and chimpanzees constitute the family Hominidae. This group evolved from a common ancestor with the Old World monkeys some 40 million years ago.",
	"http://en.wikipedia.org/wiki/List_of_common_misconceptions#Biology",
	"images/chimpanzee.jpg"
	);
var question3 = new Question(
	"A person who is drowning will...",
	"instinctively kick their legs and paddle their arms in the attempt to reach the surface, which often unintentionally results in pulling the body further under the water.",
	"wave their arms in an uncontrolled manner and call for help.",
	"generally appear to be swimming safely, showing no visible panic in their movements.",
	3,
	"Drowning is often thought to be a violent struggle, where the victim waves and calls for help. In truth, drowning is often inconspicuous to onlookers. In most cases, raising the arms and vocalising are impossible due to the instinctive drowning response. Waving and yelling (known as &ldquo;aquatic distress&rdquo;) is a sign of trouble, but not a dependable one: most victims demonstrating the instinctive drowning response do not show prior evidence of distress.",
	"http://en.wikipedia.org/wiki/List_of_common_misconceptions#Human_body_and_health",
	"images/ocean.jpg"
	);
var question4 = new Question(
	"How many senses do humans have?",
	"5",
	"0",
	"7",
	4,
	"Humans have more than the commonly cited five senses. Although definitions vary, the actual number ranges from 9 to more than 20. In addition to sight, smell, taste, touch, and hearing, which were the senses identified by Aristotle, humans can sense balance and acceleration (equilibrioception), pain (nociception), body and limb position (proprioception or kinesthetic sense), and relative temperature (thermoception). Other senses sometimes identified are the sense of time, itching, pressure, hunger, thirst, fullness of the stomach, need to urinate, need to defecate, and blood carbon dioxide levels.",
	"http://en.wikipedia.org/wiki/List_of_common_misconceptions#Human_body_and_health",
	"images/eye.jpg"
	);
var question5 = new Question(
	"If five coin flips in a row result in heads, the probability of the sixth flip being tails is...",
	"50%",
	"5/6",
	"impossible to know",
	1,
	"When an event with equally probable outcomes comes out the same way several times in succession, the other outcome is not more likely next time. For example, if a roulette ball ends up on black many times in a row, and not once on red (as reportedly happened 26 times on August 18, 1913, in the Monte Carlo Casino), the next ball is not more likely to land on red; red is not &ldquo;due&rdquo;. For a fair wheel, neither is red less likely. This misconception is known as the gambler's fallacy; in reality statistical independence holds, and red is just as likely or unlikely on the next spin as always&mdash;sometimes expressed as &ldquo;the system has no memory&rdquo;. If the event is physically determined, and not perfectly random, the repeated outcome may be more likely. For example, a die that has rolled a six ten consecutive times might be loaded or controlled by hidden magnets, and would be more likely to roll another six.",
	"http://en.wikipedia.org/wiki/List_of_common_misconceptions#Mathematics",
	"images/coins.jpg"
	);
var question6 = new Question(
	"Hydrogen peroxide...",
	"destroys newly formed skin cells, and so can impede healing of wounds and lead to scarring.",
	"is an effective disinfectant for treating wounds.",
	"should not be used as a cleaning agent because it is toxic.",
	1,
	"It is a common misconception that hydrogen peroxide is a disinfectant or antiseptic for treating wounds. While it is an effective cleaning agent, hydrogen peroxide is not an effective agent for reducing bacterial infection of wounds. Furthermore, hydrogen peroxide applied to wounds can impede healing and lead to scarring because it destroys newly formed skin cells.",
	"http://en.wikipedia.org/wiki/List_of_common_misconceptions#Human_body_and_health",
	"images/h2o2.png"
	);

var allQuestions = [question1, question2, question3, question4, question5, question6];
var qQuantity = allQuestions.length;

function clearQuestion() {
	$(".ask").text("");
	$(".answers").children().remove();
	$(".more").hide();
	$(".information").remove();
	$(".picture").css("background-image", "none");
	clicked = false;
}

function nextQuestion(question) {
	if (qCount !== 0) {
		clearQuestion();
	}
	$(".progress li").eq(qCount).addClass("completed");
	$(".ask").text(question.ask);
	for (var p in question) {
		if (p == "ask" || p == "correctAns" || p == "information" || p  == "source" || p == "image") continue;
		$(".answers").append('<li class="answer">' + question[p] + '</li>');
	}
	$(".more").prepend('<p class="information">' + question.information + ' <a href="' + question.source + '" target="_blank">Source</a></p>');
	qCount++;
	if (qCount == qQuantity) {
		$(".next").text("Results");
	}
}

function feedbackMsg() {
	if (numCorrect < 0.2 * qQuantity) {
		return "Better luck next time.";
	} else if (numCorrect < 0.6 * qQuantity) {
		return "Good Effort";
	} else if (numCorrect == qQuantity) {
		return "Excellent!";
	} else {
		return "Nice Job";
	}
}

$(document).ready(function(){

	for (var i = 0; i < qQuantity; i++) {
		$(".progress").append("<li>&nbsp;</li>");
	}

	$(".introduction").show();

	$(".takeQuiz").click(function(){
		$(".introduction").hide();
		nextQuestion(allQuestions[qCount]);
	});

	$(".next").click(function(){
		if (allQuestions[qCount]) {
			nextQuestion(allQuestions[qCount]);
		} else {
			clearQuestion();
			$(".end h2").text(feedbackMsg());
			$(".numCorrect").text("You answered " + numCorrect + " out of " + qQuantity + " questions correctly.");
			$(".end").show();
		}
	});

	$(".answers").on("click", ".answer", function(){
		var currentQ = allQuestions[qCount-1];
		var currentA = currentQ.correctAns;

		if (!clicked) {
			if ($(this).text() == currentQ["answer" + currentA]) {
				$(this).addClass("showCorrect");
				numCorrect++;
			} else {
				$(this).addClass("incorrect");
			}

			setTimeout(function(){
				$(".answer").eq(currentA - 1).addClass("correct");
				$(".answer").not(".correct").addClass("dimmed");
				setTimeout(function(){
					$(".picture").css('background-image', 'url("' + currentQ.image + '")');
					$(".more").fadeIn(1000);
				}, 2000);
			}, 1000);

			clicked = true;
		}
	});

	$(".retakeQuiz").click(function(){
		$(".progress li").removeClass("completed");
		$(".end").hide();
		$(".next").text("Next Question");
		qCount = 0;
		numCorrect = 0;
		nextQuestion(allQuestions[qCount]);
	});

});
