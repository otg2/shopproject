<%@ Page Title="Contact" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Contact.aspx.cs" Inherits="ShopProject.Contact" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <h2><%: Title %>.</h2>
    <h3>Your contact page.</h3>
    <address>
        One Microsoft Way<br />
        Redmond, WA 98052-6399<br />
        <abbr title="Phone">P:</abbr>
        425.555.0100
    </address>
    <Border
        BorderThickness="2"
        BorderBrush="Black"
        Background="LightGray"
        HorizontalAlignment="Left"
        VerticalAlignment="Top"
        Width="100"
        Height="100">
            <canvas id="myCanvas" width="500" height="500" style="border:1px solid #000000;"></canvas>
    </Border>

    <address>
        <strong>Support:</strong>   <a href="mailto:Support@example.com">Support@example.com</a><br />
        <strong>Marketing:</strong> <a href="mailto:Marketing@example.com">Marketing@example.com</a>
    </address>
    <script type ="text/javascript" src ="../Scripts/storeMap.js"></script>
</asp:Content>
