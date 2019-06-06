import { Component, Input } from '@angular/core';
import { IActivity } from '../models/activity'
@Component({
    selector : 'activity-thumbnail',
    templateUrl : './activity-thumbnail.html'
})
export class ActivityThumbnailComponent{

    @Input() activity: IActivity;



}