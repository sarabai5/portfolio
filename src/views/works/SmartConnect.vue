<template>
  <div class="page">
    <div class="block block-0 div-gray">
      <div class="block-0-subtitle">
        Help the engineers to focus on one task at a time
      </div>
      <p class="block-0-title">
        <span class="block-0-title--color">SmartConnect</span> | Desktop
        Software Design for Electric Engineering
      </p>
      <div class="block-0-note">
        Work in collaboration with Daisy Chang and S&C design team
      </div>
    </div>
    <div class="block block-1">
      <img class="gif-1" src="/assets/works/SmartConnect/main.gif" />
    </div>
    <div id="0" class="block block-2">
      <div class="block-2-l">
        <!-- <img class="img-0" src="/assets/works/SmartConnect/img-0.png" /> -->
        <div class="block-topic">OVERVIEW</div>
        <div class="block-title">Background</div>
        <div class="block-2-content">
          In this summer internship, I worked with the design team on their
          engineering control system interface,
          <span class="bold-700"
            >focusing on streamlining UI and improving work efficiency for the
            engineers</span
          >.<br /><br />Since IntelliLink was established in early 2000, the UI
          and the system has been outdated, so we want to migrate to new
          technologies and make the system modular and reusable, improving user
          interface as well as developer experience.
        </div>
      </div>
      <img class="img-1" src="/assets/works/SmartConnect/img-1.png" />
    </div>
    <div class="block margin-5">
      <div class="block-start">
        <div class="block-title margin-1">Challenge</div>
      </div>
      <div class="block-3-list">
        <div class="block-3-item">
          <div class="block-3-img">
            <img class="img-2" src="/assets/works/SmartConnect/img-2.png" />
          </div>
          <div class="block-nopadding">
            <div class="block-3-item-title">Steep Learning Curve</div>
            <div class="block-3-item-desc">
              Electric power knowledge and ecosystem of all related software and
              hardware
            </div>
          </div>
        </div>
        <div class="block-3-item">
          <div class="block-3-img">
            <img class="img-3" src="/assets/works/SmartConnect/img-3.png" />
          </div>
          <div class="block-nopadding">
            <div class="block-3-item-title">Simplify the Complicated</div>
            <div class="block-3-item-desc">
              Make the application more modular and reusable to improve the user
              flow of long operation route with side tasks
            </div>
          </div>
        </div>
        <div class="block-3-item">
          <div class="block-3-img">
            <img class="img-4" src="/assets/works/SmartConnect/img-4.png" />
          </div>
          <div class="block-nopadding">
            <div class="block-3-item-title">Multi User Groups & REQS</div>
            <div class="block-3-item-desc">
              Accommodate tasks of different user groups and innovate UI within
              industry standards and consistency with company branding
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="div-gray"> -->
    <div id="1" class="block-4 div-gray">
      <div class="block-topic block-topic-4">HIGHLIGHTS</div>
      <div class="block-title block-4-title">
        Solutions Targeting Pain Points
      </div>
      <div class="block-swiper">
        <button
          class="block-swiper-arrow block-swiper-arrow-l"
          slot="button-prev"
        ></button>
        <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
          <swiper-slide
            class="swiper-item"
            v-for="(item, i) in solutions"
            :key="i"
          >
            <img class="swiper-item-img" :src="item.img" />
            <div class="swiper-item-title">{{ item.title }}</div>
            <div class="swiper-item-desc">{{ item.desc }}</div>
          </swiper-slide>
          <div
            class="swiper-pagination swiper-indicator"
            slot="pagination"
          ></div>
        </swiper>
        <button
          class="block-swiper-arrow block-swiper-arrow-r"
          slot="button-next"
        ></button>
      </div>
    </div>
    <!-- </div> -->

    <!-- <div class="block div-gray">
      <div class="block-title">Proposed Design System</div>
      <div class="block-row margin-2">
        <img class="img-6" src="/assets/works/SmartConnect/img-6.png" />
        <div class="block-6">
          <div class="block-6-title">UI Survey</div>
          <div class="block-6-content">
            A UI survey is designed particularly to find out how far the
            engineers are willing to go in terms of interface modernization, as
            some people shows the demand for newer-looking software for the
            industry while some would like to remain the traditional
            professionalism.<br /><br />
            The final design system has been tested with in-house engineers and
            gone through multiple team critiques.
          </div>
        </div>
      </div>
    </div> -->

    <div class="block">
      <!-- <div class="block-title margin-3">Design Process & Timeline</div> -->
      <img class="img-7" src="/assets/works/SmartConnect/img-7.png" />
    </div>

    <div id="2" class="block block-7">
      <div class="block-topic">USER RESEARCH</div>
      <p class="block-7-intro">
        Our first task was to conduct as many interviews as we could, so several
        ones in each user group. Unlike customer-facing products, IntelliLink is
        for professional electric engineers to perform daily checkups and
        configurations. In order to create <span>improved user flow</span>, we
        needed to conduct many interviews upfront to understand the ecosystem of
        Smart Connect down to details including electric power terminology, how
        the software operates on the devices, limitation, warning actions, etc.
        In these interviews, engineers discussed the
        <span>reasonings behind settings</span>, the
        <span>settings and data that they want quick access to</span>, and the
        <span>different goals they try to accomplish on each page</span> or
        <span>based on their job funtions</span>.
      </p>
      <div class="block-7-row">
        <div class="block-7-item">
          <img class="img-8" src="/assets/works/SmartConnect/img-8.png" />
          <div class="block-7-title">Expert Interviews</div>
          <div class="block-7-desc">
            Understand IntelliLink system and the ecosystem of related products
            at S&C. [Terminology, how the software operates on the devices,
            limitation, warning actions, etc.]
          </div>
        </div>
        <div class="block-7-item block-7-item--r">
          <img class="img-9" src="/assets/works/SmartConnect/img-9.png" />
          <div class="block-7-title">Stakeholders Interviews</div>
          <div class="block-7-desc">
            Understand use cases and pain points in engineers’ daily checkups
            and configurations.
          </div>
        </div>
      </div>
    </div>

    <div class="block block-8">
      <div class="block-title block-8-title">
        5 User Groups | 9 Participants | 15 Interviews
      </div>
      <div class="block-8-list">
        <div class="block-8-item" v-for="(item, i) in participants" :key="i">
          <img class="block-8-item-avatar" :src="item.avatar" />
          <div class="block-8-item-name">{{ item.name }}</div>
        </div>
      </div>
    </div>

    <!-- <div class="block block-8">
      
    </div> -->

    <div id="3" class="block block-9 div-gray">
      <div class="block-topic">SYNTHESIS</div>

      <div class="block-9-title block-9-title-2">6 Pain Points Identified</div>

      <p class="block-9-intro">
        Next, we did a themati analysis of the interviews conducted with the
        in-house engineers and
        <span>identify patterns across different user groups</span>. By
        clustering the items that came up repeatedly within the interviews with
        an affinity diagram, we were able to identify 6 main pain points that
        our users wish for a fix.
      </p>

      <img class="img-19" src="/assets/works/SmartConnect/img-19.png" />

      <div class="block-9-title">
        First-time Onboarding and Daily Tasks Outlining
      </div>

      <p class="block-9-intro">
        The <span>complicated system</span> and the
        <span>multiple user groups</span> posed an difficulty in identifying a
        general user flow. To aid in our understanding of their user flows for
        our later ideation, we organized their common tasks into
        <span>one simple overarching skeleton</span> so that we have a base
        point for creating specific improvements targeting different user groups
        in addition to their main work flow.
      </p>

      <img class="img-16" src="/assets/works/SmartConnect/img-16.png" />

      <div class="block-nopadding">
        <div class="block-9-row">
          <img class="img-18" src="/assets/works/SmartConnect/img-18.png" />

          <div class="block-9-column">
            <div class="block-9-title block-9-title-3">Affinity Diagram</div>

            <div class="block-9-content">
              We gathered and categorized interview insights and pain points
              into list of items in clusters.<br /><br />
              The affinity diagram helped us identify 6 most complained pain
              points and develop them into possible features to design for the
              system.
            </div>
          </div>
        </div>

        <div class="block-9-row">
          <div class="block-9-column">
            <div class="block-9-title">Value-Effort Matrix</div>

            <p class="block-9-intro block-9-content block-9-content-1">
              Based on identified pain points, we developed a list of functions
              and features to add or improve.<br /><br />

              Then we mapped them onto a <span>value-effort matrix</span> to
              help us identify the priority of improvements, which should
              enhance the efficiency of the software while not costing too much
              for both designers and developers.
            </p>
          </div>
          <img class="img-20" src="/assets/works/SmartConnect/img-20.png" />
        </div>

        <div class="block-10">
          <div class="block-10-title">Design Principles</div>

          <ul class="block-10-content mt-0">
            <li class="block-10-content-bold mt-0-5">
              #1 Focus on one task at a time
            </li>
            <li>
              The control system has hundreds of settings in which most requires
              electricity professional knowledge and working experiences to use.
              We can help users to more efficiently work with the settings in
              the system by building user flows that focus on one task at time.
            </li>
            <li class="block-10-content-bold">#2 Be informative</li>
            <li>
              Allow engineers to see a list of settings as comprehensive as
              possible for configurations and navigation in one work session.
            </li>
            <li class="block-10-content-bold">#3 Be customizable</li>
            <li>
              Accommodate different needs of multiple user groups by allowing
              more customization in interface design.
            </li>
            <li class="block-10-content-bold">
              #4 Innovative while consistent visual branding
            </li>
            <li>
              Propose design improvements based on design system and their other
              software interfaces and find visual balance between modern and
              professional.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div id="4" class="block block-11">
      <div class="block-topic">USER TESTINGS</div>
      <img class="img-22" src="/assets/works/SmartConnect/img-22.png" />

      <div class="block-11-1">
        <div class="block-11-1-note">10 Participants | 13 Testing Sessions</div>
        <div class="block-11-1-title">Testing Goal & Methods</div>
        <div class="block-11-1-row">
          <div class="block-11-1-stages">
            <div class="block-11-1-stage bg-1">
              <div class="block-11-1-stage-title">Stage 1</div>
              <div class="block-11-1-stage-desc">
                Correct our understanding errors with wireframes
              </div>
            </div>
            <div class="block-11-1-stage bg-2">
              <div class="block-11-1-stage-title block-11-1-stage-title-1">
                Stage 2
              </div>
              <div class="block-11-1-stage-desc">
                Test the improved but still rough user flow in lo-fi
              </div>
            </div>
            <div class="block-11-1-stage bg-3">
              <div class="block-11-1-stage-title block-11-1-stage-title-2">
                Stage 3
              </div>
              <div class="block-11-1-stage-desc">
                Test multiple versions of improved user flow and interaction
                details in both mid-fi and hi-fi
              </div>
            </div>
          </div>
          <img class="img-23" src="/assets/works/SmartConnect/img-23.png" />
        </div>
      </div>

      <!-- <div class="block-11-title">Testing-based Iteration Highlights</div>
      <div class="block-11-head">
        <div class="block-11-head-text block-11-head-l">#Proposed Solution</div>
        <div class="block-11-head-text block-11-head-r">
          #Iterative Solution
        </div>
      </div>
      <div class="block-11-list">
        <div v-for="(item, i) in highlights" :key="i">
          <div
            v-if="item"
            class="block-11-item"
            :style="{ backgroundImage: `url('${item.normal}')` }"
            @mouseenter="onHover(i)"
          >
            <div v-if="hoverIndex == i" class="block-11-item-hover">
              <img class="block-11-item-hover-img" :src="item.hover" />
              <div class="block-11-item-hover-desc">
                {{ item.desc }}
              </div>
            </div>
          </div>
          <img
            v-else
            class="arrow"
            src="/assets/works/SmartConnect/arrow.png"
          />
        </div>
      </div> -->
    </div>

    <div id="6" class="block pt-80">
      <div class="block-topic">DESIGN ITERATIONS</div>

      <div class="iteration">
        <img
          class="iteration-icon"
          src="/assets/works/SmartConnect/iteration-1.png"
        />
        <div class="iteration-goal">GOAL #1</div>
        <div class="iteration-h1">
          Improve screen readability and make content learnable and digestible
        </div>
        <div class="iteration-h2 iteration-h2-1">
          We created an intial flow in lo-fi prototype and validated the
          redesign direction. Then as we moved on to mid-fi and hi-fi prototype,
          we tested more on the detail interaction, color message, intuitiveness
          of the interface, and completeness of information that they need. Some
          methods we used in guiding user testing sessions include:
        </div>
        <div class="iteration-h3">
          a. Walk through and think out loud.<br />
          b. A/B testing<br />
          c. First click
        </div>
        <div class="iteration-block">
          <div class="iteration-ch-1">APPROACH #1</div>
          <div class="iteration-h4">Use card design to categorize settings</div>
          <div class="iteration-row">
            <p class="iteration-h2 content-left">
              When we first saw the complicated settings scattered on the pages
              being very difficult to be located, we immediately thought of
              using card design to group settings together to
              <span class="bold black">trigger procedual memory</span> and
              therefore
              <span class="bold black">enable quick way-finding</span>.
              According to Nielson Norman Group’s article, “cards work best for
              <span class="bold black">collections of heterogeneous items</span
              >, an excellent choice for dashboard applications”. Also, cards in
              these screens can also be perfect replacement of the old style of
              accordion, so that the entire application stays consistent in UI.
            </p>
            <div class="c-c-c">
              <img
                class="iteration-3"
                src="/assets/works/SmartConnect/iteration-3.png"
              />
              <div class="iteration-h2 bold">Card design sample screen</div>
            </div>
          </div>

          <p class="iteration-h2 content-left mt-60">
            But in order to
            <span class="bold black">organize the items together correctly</span
            >, we conducted
            <span class="bold black">many interviews with engineers</span> as
            well as constantly reaching out to them with questions. All the
            layout, new icons, button linkage, and page logic were confirmed by
            engineers during our user testing sessions to make sure that they
            <span class="bold black">don’t convey ambiguous message</span> or
            cause too much extra effort in transitioning from old version to the
            new design.
          </p>

          <div class="iteration-ch-2 mt-35">Pain points raised by users:</div>
          <p class="iteration-h2 mt-5 a-s-s">
            Users waste a lot of time finding settings even for the expert
            users.
          </p>

          <div class="iteration-row mt-20">
            <div class="content-left">
              <div class="iteration-ch-2">Testing Insights:</div>
              <p class="iteration-h2 mt-5 a-s-s">
                Card design with subsets on more complicated pages can have too
                much elevation and also lead to a lack of UI hierachy problem.
              </p>
            </div>
            <img
              class="iteration-4"
              src="/assets/works/SmartConnect/iteration-4.png"
            />
          </div>

          <div class="iteration-h4 mt-28">Final version</div>
          <img
            class="iteration-5 mt-20"
            src="/assets/works/SmartConnect/iteration-5.png"
          />

          <div class="iteration-h4 mt-50">Pros</div>
          <div class="iteration-box iteration-box-c2 mt-5">
            Clear hierarchy of accordion, subcards and input field through added
            color code, background color contrast, outlines, and less drop
            shadow.
          </div>
        </div>

        <div class="iteration-block">
          <div class="iteration-ch-1">APPROACH #2</div>
          <div class="iteration-h4">
            Use different visual cues to indicate setting status to increase
            scannability
          </div>
          <p class="iteration-h2">
            In order to keep the interface less overwhelming, less information
            heavy but informative enough. Settings are first, defaulted as
            hidden or expanded based on their configuring status and priority,
            and second, indicated with a good use of UI elements and color cues.
          </p>

          <div class="iteration-ch-2 mt-17">Pain points raised by users:</div>

          <ul class="iteration-ul mt-5">
            <li>
              Some accordions are defaulted as collapsed while being expanded is
              need and vice versa.
            </li>
            <li>
              <span class="bold black">Improperly expanded accorions</span> and
              settings fill the interface with
              <span class="bold black">necessary information</span> and thus
              lead to time-waste and frustration of engineers who try to figure
              out what settings are configured on this device and what are left
              undone. They want to be able to
              <span class="bold black"
                >know the setting situation at a quick glance</span
              >. Different pages need different design solutions to tackle this
              problem.
            </li>
          </ul>

          <div class="iteration-ch-2 mt-20">
            Initial design improvements for testing:
          </div>
          <ul class="iteration-ul mt-5">
            <li>
              Add a color dot indicator to inform users of the status of the
              accordion, so purple for configured active settings, and grey for
              unconfigured or inactive ones.
            </li>
            <li>Use only system color green and grey to indicate status.</li>
          </ul>

          <div class="iteration-h4 mt-50">Testing version #1</div>
          <img
            class="iteration-5 mt-10"
            src="/assets/works/SmartConnect/iteration-6.png"
          />

          <div class="iteration-ch-2 mt-50">Testing Insights:</div>
          <ul class="iteration-ul mt-5">
            <li>
              The green and grey checkboxes and accordion shows status a little
              better but didn’t fully solve the information-heavy interface
              problem when inactive settings are still on screen.
            </li>
            <li>
              Different color dot for accordion send confusing message to users,
              since some colors like red and yellow come with a meaning, such as
              error.
            </li>
          </ul>

          <div class="iteration-ch-2 mt-20">
            Testing informed design improvements:
          </div>
          <ul class="iteration-ul mt-5">
            <li>
              Add checkbox system that allows quick glance for more setting
              information without too much scrolling and searching.
            </li>
            <li>
              Change the red and other colored dot in front to accordion to all
              purple, which is a color carries no special meaning.
            </li>
          </ul>

          <div class="iteration-h4 mt-50">Testing version #2</div>
          <img
            class="iteration-5 mt-10"
            src="/assets/works/SmartConnect/iteration-7.png"
          />

          <div class="iteration-ch-2 mt-50">Testing Insights:</div>
          <ul class="iteration-ul mt-5">
            <li>
              Checkbox system helped achieve the elimination of inactive
              settings for interface simplification.
            </li>
            <li>
              Same green color renders a UX problem: second subcard in the
              accordion is not always the second checkbox item “Ground”. It
              could leads to misreading and misconfiguration.
            </li>
            <li>
              Purple dot for accordion is less confusing, but first-time users
              might still not know what it indicates.
            </li>
          </ul>

          <div class="iteration-ch-2 mt-20">
            Testing informed design improvements:
          </div>
          <ul class="iteration-ul mt-5">
            <li>
              Add checkbox system that allows quick glance for more setting
              information without too much scrolling and searching.
            </li>
            <li>
              For the 4 modes in an electric trip, use matching colors for the
              checkboxes and subcards so that users can quickly process the
              information of each checkbox matching with its correct subcard.
            </li>
            <li>
              Add additional text indicators to show the configured status
              together with purple dots to avoid any confusion and ambiguity.
            </li>
          </ul>

          <div class="iteration-h4 mt-50">Final version</div>
          <img
            class="iteration-8 mt-10"
            src="/assets/works/SmartConnect/iteration-8.gif"
          />

          <div class="iteration-h4 mt-50">Pros</div>
          <div class="iteration-box h-44 iteration-box-c1 mt-5">
            Form procedual memory for quick access
          </div>
          <div class="iteration-box h-44 iteration-box-c2">
            Checkboxes on top provide setting status for quick information
            capture at a glance and save time
          </div>
          <div class="iteration-box h-44 iteration-box-c1">
            Matching colored checkbox system avoids misreading and
            misconfigurating of the 4 modes.
          </div>
          <div class="iteration-box h-44 iteration-box-c2">
            Colored dots plus “configured” status sign elimiates any ambiguity,
            and thus increase scannability.
          </div>

          <div class="iteration-h4 mt-30">Cons</div>
          <div class="iteration-box h-44 iteration-box-c3 mt-5">
            It might take some effort for the engineers to get used to the new
            design
          </div>
        </div>
      </div>

      <div class="iteration mt-150">
        <img
          class="iteration-icon"
          src="/assets/works/SmartConnect/iteration-2.png"
        />
        <div class="iteration-goal">GOAL #2</div>
        <div class="iteration-h1">
          Improve the work efficiency in daily setting validation and
          application
        </div>
        <div class="iteration-block">
          <div class="iteration-ch-1">APPROACH #1</div>
          <div class="iteration-h4 bold-700">
            Merge three buttons into one validate button and establishing a user
            flow that starts with validation, and move the buttons from global
            navigation to floating buttons for space saving and remaining
            accessiable at any time
          </div>

          <div class="iteration-ch-2 mt-30">Pain points and concerns:</div>
          <ul class="iteration-ul mt-5">
            <li>
              Three buttons on the top nav bar are mixed with a lot of other
              useless widgets.
            </li>
            <li>
              Users sometimes forgot validation and just hit “apply”, which also
              contains validation function but it’s not encouraged work flow.
            </li>
            <li>
              There’s not enough space on the top nav bar after reconstruction.
            </li>
          </ul>

          <div class="iteration-ch-2 mt-20">
            Initial design improvements for testing:
          </div>
          <ul class="iteration-ul mt-5">
            <li>
              Move the initial three button set from the top nav bar to floating
              or merged into one dropdown button.
            </li>
            <li>A/B testing widget location, style, and function.</li>
          </ul>

          <div class="iteration-h4 mt-50">Testing version</div>
          <img
            class="iteration-8 mt-10"
            src="/assets/works/SmartConnect/iteration-9.gif"
          />

          <div class="iteration-h4 mt-50">Pros</div>
          <div class="iteration-box h-44 iteration-box-c1 mt-5">
            Floating buttons save space for the crowded top nav bar
          </div>
          <div class="iteration-box h-44 iteration-box-c2">
            Button noticeability ranking: 3 buttons on top nav bar > floating
            buttons at top > floating at bottom
          </div>
          <div class="iteration-box h-44 iteration-box-c1">
            Merged button with dropdown are achieved most goals with
            compromising.
          </div>
          <div class="iteration-box iteration-box-c2">
            Merged button featuring “validate” encourage users to always go
            through the validation process and wait for validation completion to
            proceed to the next step.
          </div>

          <div class="iteration-h4 mt-30">Cons</div>
          <div class="iteration-box h-44 iteration-box-c3 mt-5">
            It’s extra effort to collapse and expand the floating button
          </div>
          <div class="iteration-box h-44 iteration-box-c4">
            Floating buttons could get in the way of content and are less
            accessible than being on top nav bar
          </div>
          <div class="iteration-box h-44 iteration-box-c3">
            Dropdown icon needs some redesign and testing to be intuitive
          </div>

          <div class="iteration-h4 mt-65">Final version</div>
          <p class="iteration-h2 mt-5 a-s-s">
            In the final version, we kept the strategy of having three buttons
            merged down into one “validate” button with dropdown and sits on top
            global nav bar, because it helps
            <span class="bold black"
              >encourage engineers to always follow the validate-apply work
              flow, stays easily accessible at all time</span
            >, and <span class="bold black">saves space</span>.
          </p>
          <img
            class="iteration-8 mt-25"
            src="/assets/works/SmartConnect/iteration-10.gif"
          />
        </div>

        <div class="iteration-block">
          <div class="iteration-ch-1">APPROACH #2</div>
          <div class="iteration-h4 bold-700">
            Put the validation process into a user flow with a pop-up window
            format, which can be collapsed to the side for quick reference with.
            Add an additional “result” tab inside of the “validate” button to
            retrieve validation result at any time.
          </div>

          <div class="iteration-ch-2 mt-30">Pain points and concerns:</div>
          <ul class="iteration-ul mt-5">
            <li>Want to see the error settings highlighted in red.</li>
            <li>Not enough result information.</li>
            <li>“Historic log” is not something very important.</li>
            <li>
              The pop-up window should stay on screen while applying settings
              because that’s the correct and encouraged procedure for engineers.
            </li>
          </ul>

          <div class="iteration-ch-2 mt-20">
            Initial design improvements for testing:
          </div>
          <ul class="iteration-ul mt-5">
            <li>
              Make the error window collapsible to the side so that the
              engineers can configure the error settings while looking at
              results, and easily go to next error setting after fixing one.
            </li>
            <li>
              Add “result” tab to “validate” dropdown button to give users quick
              retrievable access.
            </li>
            <li>
              Ask software engineers for further guidance on results information
              that can be detected and shown.
            </li>
            <li>
              Reset of settings is something they perform currently, but they
              don’t have the option to reset a specific error setting yet. It
              can be added to the error window directly and takes the place of
              the unimportant “historic log”.
            </li>
          </ul>

          <div class="iteration-h4 mt-50">Error window iteration</div>
          <p class="iteration-h2 mt-5 a-s-s">
            · Improve the pop-up window to be collapsibe and retrievable.
          </p>
          <div class="r-b-c mt-30">
            <img
              class="iteration-12"
              src="/assets/works/SmartConnect/iteration-12.png"
            />
            <img
              class="iteration-13"
              src="/assets/works/SmartConnect/iteration-13.png"
            />
            <img
              class="iteration-14"
              src="/assets/works/SmartConnect/iteration-14.png"
            />
            <img
              class="iteration-15"
              src="/assets/works/SmartConnect/iteration-15.png"
            />
          </div>

          <div class="iteration-h4 mt-70">Pros and goals achieved</div>
          <div class="iteration-box h-44 iteration-box-c1 mt-5">
            No Interruption during configuration process
          </div>
          <div class="iteration-box h-44 iteration-box-c2">
            Encouraged “validate” action by leaving the window uncollapsible.
          </div>
          <div class="iteration-box h-44 iteration-box-c1">
            Errors are highlighted for quick finding
          </div>
          <div class="iteration-box iteration-box-c2">
            Maximize control and actions allowed on one integrated screen
          </div>
          <div class="iteration-box h-44 iteration-box-c1">
            Provides more clear information & UI cues
          </div>
          <div class="iteration-box iteration-box-c2">
            Buttons linked to relevant pages/actions
          </div>

          <div class="iteration-h4 mt-65">Final version</div>
          <img
            class="iteration-8 mt-10"
            src="/assets/works/SmartConnect/4.gif"
          />
        </div>
      </div>
    </div>

    <div id="5" class="block block-12 div-gray">
      <div class="block-topic">HI-FI DESIGNS</div>

      <div class="block-12-title block-12-title-1">Hi-fi Explorations</div>
      <div class="block-12-list">
        <div class="block-12-item" v-for="(item, i) in explorations" :key="i">
          <img class="block-12-item-img" :src="item.img" />
          <div class="block-12-item-desc">{{ item.desc }}</div>
        </div>
      </div>

      <div class="r-b-s mt-200">
        <img
          class="iteration-16"
          src="/assets/works/SmartConnect/iteration-16.png"
        />

        <div class="c-s-s w-290">
          <div class="iteration-h5">Proposed Design System</div>
          <p class="iteration-h2 mt-50">
            A UI survey is designed particularly to find out how far the
            engineers are willing to go in terms of interface modernization, as
            some people shows the demand for newer-looking software for the
            industry while some would like to remain the traditional
            professionalism.
            <br />The final design system has been tested with in-house
            engineers and gone through multiple team critiques.
          </p>
        </div>
      </div>

      <div class="block-12-title mt-200">Final Design</div>
      <img class="img-28" src="/assets/works/SmartConnect/img-28.png" />
    </div>
    <Turnpage class="div-gray margin-6" :next="next"></Turnpage>

    <Quicklinks :list="quicklinks"></Quicklinks>
  </div>
</template>

<script>
import Bus from "@/bus";
import Turnpage from "@/components/turnpage.vue";
import Quicklinks from "@/components/quicklinks.vue";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

export default {
  name: "SmartConnect",
  components: {
    Turnpage,
    Quicklinks,
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data: () => {
    return {
      previous: null,
      next: {
        title: "Class InSight",
        name: "ClassInSight",
      },
      handler: null,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          prevEl: ".block-swiper-arrow-l",
          nextEl: ".block-swiper-arrow-r",
        },
      },
      quicklinks: [
        {
          title: "Overview",
          id: "0",
        },
        {
          title: "Highlights",
          id: "1",
        },
        {
          title: "Research",
          id: "2",
        },
        {
          title: "Synthesis",
          id: "3",
        },
        {
          title: "User Testings",
          id: "4",
        },
        {
          title: "Design Iterations",
          id: "6",
        },
        {
          title: "Hi-Fi",
          id: "5",
        },
      ],
      solutions: [
        {
          img: "/assets/works/SmartConnect/1.gif",
          title: "Customizable Data Table ",
          desc: "Users from 5 different user groups can now select table header items for searching and filtering in device list and prioritize items based on their daily job needs.",
        },
        {
          img: "/assets/works/SmartConnect/2.gif",
          title: "Onboarding for Guidance",
          desc: "Guide first-time users through some critical aspects of the software. Encourage and guide users to configure some important settings upon adding a new device.",
        },
        {
          img: "/assets/works/SmartConnect/3.gif",
          title: "Task Work Flow Improving Efficiency ",
          desc: "Help users focus on one task at a time by removing distractions and building a user flow for layers of settings. Eliminate unused settings from views and only show the settings upon enabling. ",
        },
        {
          img: "/assets/works/SmartConnect/4.gif",
          title: "Efficient “Validate/Apply” User Flow",
          desc: "Make validation result to a retrievable and collapsable pop-up window and improve work efficiency with validate-apply-reconfigurate user flow and linkage.",
        },
        {
          img: "/assets/works/SmartConnect/5.gif",
          title: "Quick Multi-device Comparison",
          desc: "Engineers often need to cross check settings on different devices",
        },
      ],
      participants: [
        {
          name: "3 Quality Assuarance",
          avatar: "/assets/works/SmartConnect/img-11.png",
        },
        { name: "2 PSS", avatar: "/assets/works/SmartConnect/img-12.png" },
        {
          name: "1 Developer",
          avatar: "/assets/works/SmartConnect/img-13.png",
        },
        {
          name: "2 Product Manager",
          avatar: "/assets/works/SmartConnect/img-14.png",
        },
        {
          name: "2 Design Engineers",
          avatar: "/assets/works/SmartConnect/img-15.png",
        },
      ],
      explorations: [
        {
          img: "/assets/works/SmartConnect/img-25.png",
          desc: "Professional take",
        },
        {
          img: "/assets/works/SmartConnect/img-26.png",
          desc: "Bold take",
        },
        {
          img: "/assets/works/SmartConnect/img-27.png",
          desc: "Combination iteration",
        },
      ],
      hoverIndex: -1,
      highlights: [
        {
          normal: "/assets/works/SmartConnect/img-29-0.png",
          hover: "/assets/works/SmartConnect/img-29-1.png",
          desc: "While preserving cybersecurity, we incorporated device management so that users only log in once to manage all on homepage, which enables comparision function.",
        },
        null,
        {
          normal: "/assets/works/SmartConnect/img-30-0.png",
          hover: "/assets/works/SmartConnect/img-30-1.GIF",
          desc: "Added data table filtering and customization funtion for different user groups, and additional compare function for cross devices monitoring.",
        },
        {
          normal: "/assets/works/SmartConnect/img-31-0.png",
          hover: "/assets/works/SmartConnect/img-31-1.png",
          desc: "Create a user flow to notify users of the validation result. Unsuccessful result window guides users directly to error input locations.",
        },
        null,
        {
          normal: "/assets/works/SmartConnect/img-32-0.png",
          hover: "/assets/works/SmartConnect/img-32-1.GIF",
          desc: "Improve the UI and user flow in making pop-up window retrievable and collapsable for easier configuration.",
        },
        {
          normal: "/assets/works/SmartConnect/img-33-0.png",
          hover: "/assets/works/SmartConnect/img-33-1.png",
          desc: "Collapse to hide unused settings in default and reorganize settings into better groupings.",
        },
        null,
        {
          normal: "/assets/works/SmartConnect/img-34-0.png",
          hover: "/assets/works/SmartConnect/img-34-1.GIF",
          desc: "Create a work flow for the unused settings by reorganizing them into a more modular based and task based configuration experience.",
        },
      ],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
  beforeCreate() {
    Bus.$emit("navstyle", "background-color: rgba(251, 251, 251, 0.7);");
    Bus.$emit("bodystyle", "background-color: #fbfbfb;");
  },
  beforeDestroy() {
    Bus.$emit("navstyle", "");
    Bus.$emit("bodystyle", "");
  },
  methods: {
    onHover(i) {
      console.log("onHover " + i);
      this.hoverIndex = i;
    },
    onOut() {
      this.hoverIndex = -1;
    },
  },
};
</script>

<style lang="scss" scoped>
button:hover {
  animation: none;
  color: #826feb;
}

$px: 243px;

.page {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  // padding: 0 0 100px 0;
  background-color: #ffffff;
  text-align: left;
  // scroll-behavior: smooth;
}

.div-gray {
  background-color: #fbfbfb;
}

.block {
  width: 100%;
  box-sizing: border-box;
  padding: 0 $px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &-nopadding {
    padding: 0 0;
  }

  &-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &-topic {
    margin: 0 0 46px 0;
    position: relative;
    box-sizing: border-box;
    padding: 0 5px;
    width: auto;
    height: 38px;
    line-height: 38px;
    background: linear-gradient(90deg, #8b85d2 0%, #84c4c8 100%);
    font-family: Open Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    text-transform: uppercase;
    color: #ffffff;
    align-self: flex-start;

    &-4 {
      margin: 0 0 0 $px;
      width: 208px;
    }
  }

  &-title {
    align-self: flex-start;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 150%;
    color: #454262;
  }

  &-start {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
}

.margin {
  &-1 {
    margin: 63px 0 42px 0;
  }

  &-2 {
    margin: 40px 0 0 0;
  }

  &-3 {
    margin: 150px 0 0 0;
  }

  &-4 {
    margin: 150px 0 0 0;
  }

  &-5 {
    margin: 0 0 150px 0;
  }

  &-6 {
    margin: 0 0 0 0;
    padding-bottom: 100px;
  }

  &-7 {
    margin: 0 0 0 99px;
  }
}

.block-0 {
  padding: 125px $px 20px $px;

  &-subtitle {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 48px;
    text-align: center;
    color: rgba($color: #454262, $alpha: 0.5);
  }

  &-title {
    margin: 40px 0 0 0;
    max-width: 864px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 150%;
    text-align: center;
    color: #454262;
  }

  &-title--color {
    color: #5095a5;
  }

  &-note {
    margin: 141px 0 0 0;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: rgba($color: #454262, $alpha: 0.5);
  }
}

.block-1 {
  position: relative;
  height: 800px;
  background: linear-gradient(
    252.85deg,
    #e9e8f5 0%,
    #edf3f8 19.79%,
    #daeef2 49.37%,
    #e3ebf1 67.71%,
    #ddeced 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.gif-1 {
  position: relative;
  width: 867px;
  height: auto;
  filter: drop-shadow(0px 4px 25px rgba(59, 108, 119, 0.2));
  border-radius: 16px;
}

.img-0 {
  margin: 0 0 40px 0;
  position: relative;
  width: 289px;
  height: 72px;
}

.block-2 {
  margin: 87px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &-l {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &-content {
    margin: 32px 0 0 0;
    width: 457px;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: rgba($color: #454262, $alpha: 0.6);
  }
}

.img-1 {
  margin: 71px 0 0 0;
  position: relative;
  width: 405px;
  height: auto;
}

.img-2 {
  width: 88px;
  height: auto;
}

.img-3 {
  width: 81px;
  height: auto;
}

.img-4 {
  width: 82px;
  height: auto;
}

.block-3 {
  padding: 105px 0 150px 0;
  &-list {
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  &-img {
    width: auto;
    height: 88px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }

  &-item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    &-title {
      margin: 30px 0 0 0;
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 150%;
      text-align: left;
      color: #454262;
    }

    &-desc {
      margin: 10px 0 0 0;
      width: 271px;
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;
      text-align: left;
      color: rgba(103, 100, 139, 0.6);
    }
  }
}

.block-4 {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 83px 0 142px 0;
  overflow: hidden;

  &-title {
    margin: 50px 0 65px $px;
    align-self: flex-start;
  }
}

.block-swiper {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 0 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &-arrow {
    position: absolute;
    z-index: 12;
    top: 200px;
    width: 71px;
    height: 71px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    &-l {
      left: 50px;
      background-image: url("/assets/works/SmartConnect/swiper-l.png");
    }

    &-r {
      right: 50px;
      background-image: url("/assets/works/SmartConnect/swiper-r.png");
    }
  }
}

.swiper {
  position: relative;
  // width: 100vw;
  // box-sizing: border-box;
  // padding: 0 0 0 $px;
  // overflow-y: hidden;
  // overflow-x: scroll;
  display: flex;
  flex-direction: column;
  // justify-content: flex-start;
  align-items: center;
  // overflow: hidden;
  // width: 100%;

  &-item {
    position: relative;
    // margin: 0 150px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &-img {
      width: 754px;
      height: 441px;
      filter: drop-shadow(0px 4px 25px rgba(59, 108, 119, 0.2));
      border-radius: 16px;
    }

    &-title {
      margin: 50px 0 0 0;
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 130%;
      text-align: center;
      color: #454262;
    }

    &-desc {
      max-width: 754px;
      margin: 16px 0 0 0;
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;
      text-align: center;
      color: #454262;
    }
  }

  &-indicator {
    position: relative;
    width: 400px;
    // margin: 43px 0 0 0;
  }
}

.img-6 {
  position: relative;
  width: 755px;
  height: 549px;
}

.block-6 {
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &-title {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 22px;
    line-height: 150%;
    color: #454262;
  }

  &-content {
    margin: 31px 0 0 0;
    width: 330px;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #454262;
  }
}

.img-7 {
  margin: 151px 0 96px 0;
  position: relative;
  width: 954px;
  height: auto;
}

.block-7 {
  padding: 100px $px 0 $px;

  &-intro {
    margin: 15px 0 99px 0;
    align-self: center;
    width: 954px;
    text-align: left;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    color: #454262;

    span {
      font-weight: bold;
    }
  }

  &-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }

  &-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &--r {
      margin: 0 0 0 40px;
    }
  }

  &-title {
    margin: 22px 0 0 0;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
    color: #454262;
  }

  &-desc {
    margin: 16px 0 0 0;
    width: 356px;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: rgba(103, 100, 139, 0.6);
  }
}

.img-8 {
  position: relative;
  width: auto;
  height: 167px;
}

.img-9 {
  position: relative;
  width: auto;
  height: 167px;
}

.img-10 {
  margin: 0 0 75px 0;
  align-self: flex-start;
  position: relative;
  width: 286px;
  height: 73px;
}

.block-8 {
  margin: 85px 0 128px 0;
  &-title {
    align-self: center;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 150%;
    text-align: center;
    color: #454262;
  }

  &-list {
    margin: 51px 0 0 0;
    width: 761px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  &-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &-avatar {
      position: relative;
      width: 90px;
      height: 90px;
    }

    &-name {
      width: 107px;
      margin: 28px 0 0 0;
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;
      text-align: center;
      color: rgba(103, 100, 139, 0.6);
    }
  }
}

.block-9 {
  padding: 78px $px 100px $px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &-title {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 150%;
    color: #454262;
  }

  &-title-1 {
    margin: 50px 0 0 0;
  }

  &-title-2 {
    margin: 15px 0 0 0;
  }

  &-title-3 {
    margin: 5px 0 0 0;
  }

  &-intro {
    margin: 40px 0 0 0;
    width: 954px;
    text-align: left;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    color: #454262;

    span {
      font-weight: bold;
    }
  }

  &-row {
    margin: 200px 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  &-column {
    margin: 0 0 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &-content {
    margin: 43px 0 0 0;
    width: 358px;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    color: rgba($color: #454262, $alpha: 0.6);

    &-1 {
      margin: 35px 0 0 0;
    }
  }
}

.img-16 {
  margin: 69px 0 0 0;
  position: relative;
  width: 956px;
  height: 529px;
}

.img-17 {
  align-self: flex-start;
  position: relative;
  width: 297px;
  height: 76px;
}

.img-18 {
  position: relative;
  width: 556px;
  height: 342px;
}

.img-19 {
  margin: 69px 0 136px 0;
  position: relative;
  width: 954px;
  height: auto;
}

.img-20 {
  margin: 0 0 0 40px;
  position: relative;
  width: 556px;
  height: 364px;
}

.block-10 {
  margin: 150px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  &-title {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 150%;
    color: #454262;
  }

  &-content {
    width: 656px;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    color: rgba($color: #454262, $alpha: 0.6);
    text-align: left;
    list-style-type: none;

    &-bold {
      margin: 50px 0 15px 0;
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 150%;
      color: #454262;
      text-align: left;
    }
  }
}

.block-11 {
  padding: 156px $px 100px $px;

  &-1 {
    margin: 100px 0 0 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    &-note {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;
      text-align: center;
      color: #454262;
    }

    &-title {
      margin: 9px 0 0 0;
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 150%;
      color: #454262;
    }

    &-row {
      margin: 23px 0 0 0;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }

    &-stages {
      width: 476px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }

    .bg-1 {
      background-color: #f1f6f8;
    }

    .bg-2 {
      background-color: #e7f0f1;
    }

    .bg-3 {
      background-color: #d0e2e6;
    }

    &-stage {
      width: 100%;
      box-sizing: border-box;
      padding: 16px 36px 19px 36px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      &-title {
        font-family: Rubik;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 150%;
        color: #a4c7d0;

        &-1 {
          color: #79a7b5;
        }

        &-2 {
          color: #5d8894;
        }
      }

      &-desc {
        width: 423px;
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        color: #454262;
      }
    }
  }

  &-title {
    margin: 150px 0 0 0;
    align-self: flex-start;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 150%;
    color: #454262;
  }

  &-head {
    margin: 80px 0 20px 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &-text {
      width: 457px;
      text-align: center;
      font-family: Open Sans;
      font-style: italic;
      font-weight: 600;
      font-size: 20px;
      line-height: 150%;
    }

    &-l {
      color: #454262;
    }

    &-r {
      color: #509daf;
    }
  }

  &-list {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
  }

  &-item {
    position: relative;
    margin: 75px 0;
    width: 457px;
    height: 249px;
    background-repeat: no-repeat;
    background-size: cover;
    // border: 1px solid rgba(103, 100, 139, 0.3);
    // box-sizing: border-box;
    // filter: drop-shadow(0px 4px 25px rgba(59, 108, 119, 0.2));
    // border-radius: 8px;

    &-hover {
      position: absolute;
      top: 0;
      left: 0;
      width: 457px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: #f8f8f8;
      // filter: drop-shadow(0px 4px 25px rgba(59, 108, 119, 0.2));
      box-shadow: 0px 4px 15px 2px rgba(47, 85, 94, 0.2);
      border: 1px solid rgba(103, 100, 139, 0.3);
      box-sizing: border-box;
      border-radius: 8px;
      overflow: hidden;

      &-img {
        width: 457px;
        height: 249px;
      }

      &-desc {
        margin: 15px 0 0 0;
        width: 428px;
        height: 87px;
        font-family: Rubik, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 180%;
        color: #454262;
        text-align: left;
      }
    }
  }

  .arrow {
    margin: 0 0 35px 0;
    position: relative;
    width: 111px;
    height: 88px;
    // background-image: url("/assets/works/SmartConnect/arrow.png");
    // background-size: 100% auto;
    // background-repeat: no-repeat;
  }
}

.img-21 {
  align-self: flex-start;
  position: relative;
  width: 369px;
  height: 69px;
}

.img-22 {
  margin: 25px 0 0 0;
  position: relative;
  width: 954px;
  height: 650px;
}

.img-23 {
  position: relative;
  width: 520px;
  height: auto;
}

.iteration {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &-icon {
    width: 95px;
    z-index: 1;
  }

  &-goal {
    margin: -20px 0 0 0;
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 80px;
    line-height: 100%;
    text-align: center;
    color: rgba(132, 196, 200, 0.3);
  }

  &-h1 {
    margin: 14px 0 0 0;
    width: 788px;
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 100%;
    color: #454262;
  }

  &-h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: rgba(69, 66, 98, 0.7);
  }

  &-ul {
    // list-style-type: none;
    margin-block-start: 0;
    padding-inline-start: 20px;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: rgba(69, 66, 98, 0.7);
    align-self: flex-start;

    // :before {
    //   content: "\2022";
    //   color: #148ae0;
    //   font-size: 16px;
    // }
  }

  &-h2-1 {
    margin: 21px 0 0 0;
    width: 788px;
  }

  &-h3 {
    margin: 21px 0 0 0;
    width: 679px;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #454262;
    text-align: left;
  }

  &-block {
    margin: 45px 0 0 0;
    width: 100%;
    box-sizing: border-box;
    padding: 60px 83px 80px 83px;
    border: 2px solid #6abfd2;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  &-h4 {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 150%;
    color: #454262;
    align-self: flex-start;
  }

  &-h5 {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 150%;
    color: #454262;
  }

  &-ch-1 {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 150%;
    color: #7dc0c5;
    align-self: flex-start;
  }

  &-ch-2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    color: #7dc0c5;
    align-self: flex-start;
  }

  .c-c-c {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .content-left {
      width: 374px;
    }
  }

  .iteration-3 {
    margin: 0 0 16.6px 0;
    width: 376px;
    height: auto;
  }

  .iteration-4 {
    width: 376px;
    height: auto;
  }

  .iteration-5 {
    width: 810px;
    height: auto;
  }

  .iteration-8 {
    width: 100%;
    height: auto;
  }

  .iteration-12 {
    width: 376px;
    height: auto;
  }

  .iteration-13 {
    width: 34px;
    height: auto;
  }

  .iteration-14 {
    width: 207px;
    height: auto;
  }

  .iteration-15 {
    width: 100px;
    height: auto;
  }

  &-box {
    width: 100%;
    box-sizing: border-box;
    // padding: 10px 35px 13px 26px;
    padding: 10px 26px;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #454262;

    &-c1 {
      background-color: #f1f6f8;
    }

    &-c2 {
      background-color: #e7f0f1;
    }

    &-c3 {
      background-color: #f8efee;
    }

    &-c4 {
      background-color: #f5e6e4;
    }
  }
}

.iteration-16 {
  width: 624px;
  height: auto;
}

.h-44 {
  height: 44px;
}

.a-s-s {
  align-self: flex-start;
}

.r-b-c {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.r-b-s {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.c-s-s {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.w-290 {
  width: 290px;
}

.mt-0 {
  margin-top: 0px;
}

.mt-0-5 {
  margin-top: 5px;
}

.mt-5 {
  margin: 5px 0 0 0;
}

.mt-10 {
  margin: 10px 0 0 0;
}

.mt-17 {
  margin: 17px 0 0 0;
}

.mt-20 {
  margin: 20px 0 0 0;
}

.mt-25 {
  margin: 25px 0 0 0;
}

.mt-28 {
  margin: 28px 0 0 0;
}

.mt-30 {
  margin: 30px 0 0 0;
}

.mt-35 {
  margin: 36px 0 0 0;
}

.mt-50 {
  margin: 50px 0 0 0;
}

.mt-60 {
  margin: 60px 0 0 0;
}

.mt-65 {
  margin: 65px 0 0 0;
}

.mt-70 {
  margin: 70px 0 0 0;
}

.mt-150 {
  margin: 150px 0 0 0;
}

.mt-200 {
  margin: 200px 0 0 0;
}

.pt-80 {
  padding-top: 80px;
}

.bold {
  font-weight: 500;
}

.bold-700 {
  font-weight: 700;
}

.black {
  color: #454262;
}

.block-12 {
  padding: 100px $px 229px;

  &-title {
    align-self: flex-start;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 150%;
    color: #454262;
  }

  &-list {
    margin: 40px 0 0 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    &-img {
      width: 295px;
      height: 395px;
    }

    &-desc {
      margin: 24px 0 0 0;
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 150%;
      color: #454262;
    }
  }
}

.img-24 {
  align-self: flex-start;
  position: relative;
  width: 349px;
  height: 54px;
}

.img-28 {
  margin: 40px 0 0 0;
  position: relative;
  width: 954px;
  height: auto;
}
</style>
