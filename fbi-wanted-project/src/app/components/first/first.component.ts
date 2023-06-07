import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { WantedService } from "../../services/wanted/wanted.service";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: 'fbi-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit, OnDestroy {
  public pageIndex: number = 0;
  public wantedList: any;
  public subscription: Subscription = new Subscription();

  constructor(private wantedService: WantedService) { }

  ngOnInit(): void {
    this.subscription = this.wantedService.getWantedList(this.pageIndex + 1).subscribe(
      data => {
        console.log(data);
        this.wantedList = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handlePageEvent($event: PageEvent) {
    this.pageIndex = $event.pageIndex;

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.wantedService.getWantedList(this.pageIndex + 1).subscribe(
      data => {
        console.log(data);
        this.wantedList = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
