import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon application blog';

  posts = [
    {
      title: "Mon 1er post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet scelerisque rhoncus. Vivamus vel neque non ante tincidunt lobortis et sed odio. Nunc tempor cursus urna, et commodo dui commodo et. Donec eu velit at odio vehicula tristique et eget lorem. Fusce a posuere eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum dictum aliquam orci, in lobortis nisi. Nullam a magna vitae sem consectetur convallis. Aliquam blandit purus quis quam porta, eget luctus quam mattis.",
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: "Mon 2nd post",
      content: "Nam accumsan pretium dolor, vel congue sem hendrerit eget. Maecenas placerat at neque at pulvinar. Donec vitae quam quis quam vulputate porta. Morbi non ligula pretium, mollis sapien vel, rhoncus ligula. Donec pharetra metus a turpis porta dictum. In leo velit, luctus sodales magna non, iaculis bibendum nulla. Aenean nulla mi, rutrum sit amet velit quis, vestibulum pulvinar ligula. Aliquam et tellus viverra, egestas ex sed, feugiat mi.",
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: "Encore un post",
      content: "Phasellus id sagittis nisl, non lobortis urna. Aliquam rhoncus turpis eu elit pulvinar commodo. Integer mauris augue, scelerisque sit amet volutpat ut, luctus ut ante. Aliquam condimentum dapibus velit rhoncus ultrices. Nulla vitae libero quis neque consequat aliquet vel nec velit. In semper pharetra diam nec congue. ",
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
