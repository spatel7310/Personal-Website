import { Component, NgZone } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(SwiperComponent) swiper?: SwiperComponent;

  id = "tsparticles";
  title = 'sp-software';
  isMobile: boolean = false;
  mobileSections = [HomeComponent, AboutComponent, PortfolioComponent, ContactComponent];

  particleOptions = {
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push,
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2, // Number of particles to add on click
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#00ff00",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 1.2,
        straight: false,
      },
      number: {
        limit: 75, // Absolute cap on particles
        density: {
          enable: true,
          area: 1000,
        },
        value: 50,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.5, max: 2 },
      },
    },
    detectRetina: true,
  };

  constructor(
    private ngZone: NgZone,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  onSlideChange(swiper: any) {
    if (swiper.isEnd) {
      // all swiper events are run outside of ngzone, so use ngzone.run or detectChanges to update the view.
      this.ngZone.run(() => {
        this.mobileSections = [...this.mobileSections];
      });
    }
  }

  ngAfterViewInit() {
    if (this.isMobile && this.swiper?.swiperRef) {
      const swiperInstance = this.swiper.swiperRef;
      const swiperEl = swiperInstance.wrapperEl;

      const doBounce = () => {
        swiperEl.style.transition = 'transform 350ms ease';

        // First bounce out
        swiperInstance.setTranslate(-100);

        setTimeout(() => {
          // Snap back immediately after first bounce
          swiperInstance.setTranslate(0);

          // Immediately start second bounce after snapping back
          setTimeout(() => {
            swiperInstance.setTranslate(-100);

            setTimeout(() => {
              swiperInstance.setTranslate(0);

              // Clear the transition after the last snap
              setTimeout(() => {
                swiperEl.style.transition = '';
              }, 300);
            }, 300); // second bounce duration
          }, 275); // delay between first snap back and second bounce
        }, 300); // first bounce duration
      };

      setTimeout(() => {
        doBounce();
      }, 8000); // Allow swiper to settle before starting
    }
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
}
