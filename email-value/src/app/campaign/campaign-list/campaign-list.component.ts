import {Component, Input, OnInit} from "@angular/core";
import {CampaignService} from "../campaign.service";
import {Campaign} from "../campaign";
import {Subject} from "rxjs";

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {

  campaigns: Campaign[] = [];
  @Input() resultsPerPage = 10;
  searchTerm$: Subject<string>

  constructor(private campaignService: CampaignService) {
    this.searchTerm$ = this.campaignService.searchTerm$;
    this.campaignService.searchTerm$.subscribe(term => {
      this.campaigns = this.campaignService.selectCampaignsByTerm(term)
    });
  }

  ngOnInit() {
    this.campaigns = this.campaignService.campaigns.slice(0, this.resultsPerPage);
  }

  onSelectCampaigns() {
    this.campaignService.selectCampaigns();
  }

  onDeleteCampaign() {
    this.campaignService.deleteCampaigns();
  }
}
